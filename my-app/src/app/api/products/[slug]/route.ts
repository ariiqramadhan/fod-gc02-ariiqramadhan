import { getProductsById } from "@/db/models/product";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    try {
        const slug = params.slug.split('-');
        const _id = slug[slug.length-1]
    
        const data = await getProductsById(_id);
        return Response.json(data);

    } catch (err) {
        return Response.json({message: 'Internal Server Error'}, {status: 500})
    }
}