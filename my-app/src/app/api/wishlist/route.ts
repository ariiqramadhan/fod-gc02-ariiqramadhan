import { addWishlist, delWishlist, getWishlistByUser } from "@/db/models/wishlist";
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
    
        return NextResponse.json(data, { status: 201 });
    } catch (err) {
        if (err instanceof Error) {
            if (err.cause === 'NOT_FOUND') {
                console.log(err.message);
                return NextResponse.json({message: err.message}, { status: 404 });
            }
        }
        return NextResponse.json({message: 'Internal Server Error'}, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();
        const userId = (headers().get('x-user-id')) as string;

        const data = await delWishlist(new ObjectId(body.wishlistId), userId);

    
        return NextResponse.json(data);
    } catch (err) {
        if (err instanceof Error) {
            if (err.cause === 'NOT_FOUND') {
                console.log(err.message);
                return NextResponse.json({message: err.message}, { status: 404 });
            }
            if (err.cause === 'FORBIDDEN') {
                console.log(err.message);
                return NextResponse.json({message: err.message}, { status: 403 });
            }
        }
        return NextResponse.json({message: 'Internal Server Error'}, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const userId = (headers().get('x-user-id')) as string;

        const data = await getWishlistByUser(userId);
    
        return NextResponse.json(data);
    } catch (err) {
        return NextResponse.json({message: 'Internal Server Error'}, { status: 500 })
    }
}