'use client'

import { addWishlist } from "@/actions";

export default function AddWishlist({ params }: { params: { slug: string } }) {
    const slug = params.slug.split('-');
    const productId = slug[slug.length-1];
    return (
        <button 
            className="btn border rounded-none bg-[#AFAFAF] text-[#FFF] text-xs font-light w-full"
            onClick={() => addWishlist(productId)}
        >
            ADD WISHLIST
        </button>
    );
}
