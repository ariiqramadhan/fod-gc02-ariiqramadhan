'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [color, setColor] = useState(false);

    function changeColor() {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
            if (window) {
                window.removeEventListener('scroll', changeColor);
            }
        }
    }, [])

    const topNav = "navbar flex justify-between px-16 text-[#FFF] hover:bg-[#FFF] hover:text-[#000] fixed top-0 z-50"
    const scrollNav = "navbar flex justify-between px-16 bg-[#FFF] text-[#000] fixed top-0 z-50"

    return (
        <div className={color ? scrollNav : topNav}>
            <div className="flex-1 justify-start gap-12 text-xs">
                <a href="">FEAR OF DOG</a>
                <a href="">UNESSENTIALS</a>
                <a href="">ATHLETICS</a>
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
                <a href="">SEARCH</a>
                <a href="">ACCOUNT</a>
                <a href="">BAG</a>
            </div>
        </div>
    );
}
