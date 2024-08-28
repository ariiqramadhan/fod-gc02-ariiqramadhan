import { comparePass } from "@/db/helpers/bcrypt";
import { signToken } from "@/db/helpers/jwt";
import { getUserByUsername } from "@/db/models/user";
import { User } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
    try {
        const body: {username: string, password: string} = await req.json();

        const userValidation = z.object({
            username: z.string({message: 'Username is required!'}),
            password: z.string({message: 'Password is required!'}).min(5, 'Password must contains 5 or more characters!')
        })
            .safeParse(body);
        
        if (!userValidation.success) {
            throw userValidation.error
        }

        const user = (await getUserByUsername(body.username)) as User | null;

        if (!user) {
            throw new Error('Invalid username/password', {cause: 'Unauthorized'});
        }

        if (!comparePass(body.password, user.password)) {
            throw new Error('Invalid username/password', {cause: 'Unauthorized'});
        }

        const access_token = signToken({
            _id: user._id,
            username: user.username,
        });

        const response = NextResponse.json({
            access_token
        });
        response.cookies.set('Authorization', `Bearer ${access_token}`);
        return response;
    } catch (err) {
        console.log(err);
        if (err instanceof z.ZodError) {
            // const errors = err.issues.map(error => error.message);
            // return Response.json({message: errors});
            return NextResponse.json({message: err.issues[0].message}, { status: 400 });
        }

        if (err instanceof Error) {
            if (err.cause === 'Unauthorized') {
                return NextResponse.json({message: err.message}, {status: 401});
            }
        }

        return NextResponse.json({message: 'Internal Server Error'}, { status: 500 });
    }
}