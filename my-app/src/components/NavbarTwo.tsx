import { checkCookies } from "@/actions";
import Link from "next/link";

export default async function NavbarTwo() {
    const isLogin = await checkCookies();
    return (
        <div className="navbar flex justify-between px-16 text-[#000] fixed z-50">
            <div className="flex-1 justify-start gap-12 text-xs">
                <a href="" className="hover:underline">FEAR OF DOG</a>
                <a href="" className="hover:underline">UNESSENTIALS</a>
                <a href="" className="hover:underline">PRODUCTS</a>
            </div>
            <div className="flex-1 justify-center">
                <Link
                    href="/"
                    className="cursor-pointer text-2xl font-semibold"
                >
                    FEAR OF DOG
                </Link>
            </div>
            <div className="flex-1 justify-end gap-12 text-xs">
                <a href="" className="hover:underline">SEARCH</a>
                {isLogin ? <Link href='/profile' className="hover:underline">ACCOUNT</Link> : <Link href='/login'  className="hover:underline">ACCOUNT</Link>}
                <a href="" className="hover:underline">BAG</a>
            </div>
        </div>
    )
}