import { getUserById } from "@/db/models/user";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const userId = headers().get('x-user-id') as string;

        const user = await getUserById(userId);
        return NextResponse.json(user);
    } catch (err) {
        return NextResponse.json({message: 'Internal Server Error'}, { status: 500 });
    }
}