"use server"

import { cookies } from "next/headers"

export const checkCookies = async () => {
    const cookieStore = cookies();

    if(cookieStore.get('Authorization')) {
        return true;
    } else {
        return false;
    }
}