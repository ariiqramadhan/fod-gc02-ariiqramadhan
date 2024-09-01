'use client'

import { delWishlist } from "@/actions";
import { useRouter } from "next/navigation";

export default function RemoveWishlist({wishlistId} : {wishlistId: string}) {
    const router = useRouter();
    async function handleDelete(wishlistId: string) {
        await delWishlist(wishlistId)
        router.refresh();
    }
    return (
        <button onClick={() => handleDelete(wishlistId)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                />
            </svg>
        </button>
    );
}
