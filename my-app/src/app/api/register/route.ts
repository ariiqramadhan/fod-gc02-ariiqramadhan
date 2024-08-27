import { addUser } from "@/db/models/user";
import { UserInput } from "@/types";
import { z, ZodError } from "zod";

export async function POST(req: Request) {
    try {
        const body = (await req.json()) as UserInput;
    
        const userValidation = z.object({
            name: z.string({message: 'Name must be string!'}).optional(),
            username: z.string({message: 'Username must be string!'}),
            email: z.string({message: 'Email must be string!'}).email('Invalid email format!'),
            password: z.string({message: 'Password must be string!'}).min(5, 'Password must contains 5 or more characters!')
        })
            .safeParse(body);
        
        if (!userValidation.success) {
            throw userValidation.error
        }
    
        const data = await addUser(body);
        
        return Response.json(data, { status: 201 });
    } catch (err) {
        if (err instanceof z.ZodError) {
            // const errors = err.issues.map(error => error.message);
            // return Response.json({message: errors});
            return Response.json({message: err.issues[0].message}, { status: 400 });
        }
        if (err instanceof Error) {
            if (err.cause === 'UNIQUE_CONSTRAINT') {
                return Response.json({message: err.message}, { status: 400 });
            }
        }

        return Response.json({message: 'Internal Server Error'}, { status: 500 });
    }
}