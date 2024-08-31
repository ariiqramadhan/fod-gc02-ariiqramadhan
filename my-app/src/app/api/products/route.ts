import { getProducts } from "@/db/models/product";

export async function POST(req: Request) {
    try {
        const body: {search: string, page: number} = await req.json();
        const data = await getProducts(body.search, body.page);
    
        return Response.json(data);
    } catch (err) {
        return Response.json({message: 'Internal Server Error'}, { status: 500 })
    }
}