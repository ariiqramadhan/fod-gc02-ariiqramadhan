'use client'

import { BASE_URL } from "@/constant";
import { Product, Wishlist } from "@/types";
import { useEffect, useState } from "react";
import WishlistCard from "./WishlistCard";

interface WishlistUser extends Wishlist {
    product: Product
}

export default function WishlistList() {
    const [data, setData] = useState<WishlistUser[]>([]);
    async function getWishlist() {
        const data = await fetch(BASE_URL + '/api/wishlist');
        const wishlist = await data.json();

        setData(wishlist);
    }

    useEffect(() => {
        getWishlist();
    }, []);
    return (
        <>
            {data.map(val => <WishlistCard key={`${val._id}`} product={val.product}/>)}
        </>
    );
}
