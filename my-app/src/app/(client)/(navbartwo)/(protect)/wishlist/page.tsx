import WishlistList from "@/components/WishlistList";
import { BASE_URL } from "@/constant";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
    title: 'User Wishlist',
    description: 'User Wishlist of Fear Of Dog Products'
}

async function getWishlist() {
    const data = await fetch(BASE_URL + '/api/wishlist', {
        headers: {
            Cookie: cookies().toString()
        },
        cache: 'no-store'
    });
    const wishlist = await data.json();
    return wishlist;
}

export default async function Wishlist() {
    const wishlist = await getWishlist();
    return (
        <div className="flex flex-col mt-16 p-16 gap-4 items-center">
            <h1 className="text-4xl font-bold">WISHLIST</h1>
            <WishlistList wishlist={wishlist}/>
        </div>
    );
}
