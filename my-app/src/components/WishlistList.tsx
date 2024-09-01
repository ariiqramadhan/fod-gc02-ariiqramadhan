'use client'

import { Product, Wishlist } from "@/types";
import WishlistCard from "./WishlistCard";

interface WishlistUser extends Wishlist {
    product: Product
}

export default function WishlistList({ wishlist } : {wishlist: WishlistUser[]}) {
    return (
        <>
            {wishlist.map(val => <WishlistCard key={`${val._id}`} product={val.product} wishlistId={`${val._id}`}/>)}
        </>
    );
}
