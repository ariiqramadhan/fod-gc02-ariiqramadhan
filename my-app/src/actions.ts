"use server"

import { cookies } from "next/headers"
import { BASE_URL } from "./constant";
import { redirect } from "next/navigation";

export const checkCookies = async () => {
    const cookieStore = cookies();

    if(cookieStore.get('Authorization')) {
        return true;
    } else {
        return false;
    }
}

export const delWishlist = async (wishlistId: string) => {
    const res = await fetch(BASE_URL + '/api/wishlist', {
        method: 'DELETE',
        body: JSON.stringify({
            wishlistId
        }),
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookies().toString()
        }
    });

    if (res.ok) {
        return redirect('/wishlist');
    }

}

export const addWishlist = async (productId: string) => {
    const isLogin = await checkCookies();
    if (!isLogin) {
        return redirect('/login');
    }
    await fetch(BASE_URL + '/api/wishlist', {
        method: 'POST',
        body: JSON.stringify({
            productId
        }),
        headers: {
            'Content-Type': 'application/json',
            Cookie: cookies().toString()
        }
    });

    return redirect('/wishlist')
}