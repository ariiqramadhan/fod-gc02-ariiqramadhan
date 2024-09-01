import { getProducts } from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const page = searchParams.get('page');
        const search = searchParams.get('search');
        const data = await getProducts((search) as string, Number(page));
    
        return Response.json(data);
    } catch (err) {
        console.log(err);
        return Response.json({message: 'Internal Server Error'}, { status: 500 })
    }
}