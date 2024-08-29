import { addWishlist } from "@/db/models/wishlist";
import { WishlistInput } from "@/types";
import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const userId = (headers().get('x-user-id')) as string;

        const newWishlist: WishlistInput = {
            productId: new ObjectId(body.productId),
            userId: new ObjectId(userId),
            createdAt: new Date(),
            updatedAt: new Date()
        }

        const data = await addWishlist(newWishlist);
    
        return NextResponse.json(data);
    } catch (err) {
        console.log(err);
    }
}