'use client'

import { BASE_URL } from "@/constant";
import { useRouter } from "next/navigation";

export default function AddWishlist({ params }: { params: { slug: string } }) {
    const router = useRouter();
    async function addWishlist() {
        const slug = params.slug.split('-');
        const productId = slug[slug.length-1];
        await fetch(BASE_URL + '/api/wishlist', {
            method: 'POST',
            body: JSON.stringify({
                productId
            })
        });

        return router.push('/wishlist')
    }

    return (
        <button 
            className="btn border rounded-none bg-[#AFAFAF] text-[#FFF] text-xs font-light w-full"
            onClick={addWishlist}
        >
            ADD WISHLIST
        </button>
    );
}
