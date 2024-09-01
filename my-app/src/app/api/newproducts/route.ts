import { getNewestProducts } from "@/db/models/product"

export async function GET(req: Request) {
    try {
        const data = await getNewestProducts();
        return Response.json(data);
    } catch (err) {
        return Response.json({message: 'Internal Server Error'}, { status: 500 })
    }
}