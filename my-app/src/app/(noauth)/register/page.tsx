import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Sign Up to Fear Of Dog',
    description: 'Sign Up new account for Fear Of Dog website'
}

export default function Register() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-16">
            <h1 className="text-5xl font-bold select-none">FEAR OF DOG</h1>
            <div className="w-2/5">
                <form action="" className="w-full flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="NAME"
                        className="font-thin text-sm border border-[#CCC] focus:border-[#000] focus:outline-none w-full p-2"
                    />
                    <input
                        type="text"
                        placeholder="USERNAME *"
                        className="font-thin text-sm border border-[#CCC] focus:border-[#000] focus:outline-none w-full p-2"
                    />
                    <input
                        type="text"
                        placeholder="EMAIL *"
                        className="font-thin text-sm border border-[#CCC] focus:border-[#000] focus:outline-none w-full p-2"
                    />
                    <input
                        type="password"
                        placeholder="PASSWORD *"
                        className="font-thin text-sm border border-[#CCC] focus:border-[#000] focus:outline-none w-full p-2"
                    />
                    <button className="btn btn-sm text-xs border-[#000] font-light rounded-none bg-[#FFF] shadow-none hover:bg-[#000] hover:text-[#FFF] hover:border-[#000]">
                        SIGN UP
                    </button>
                </form>
                <div className="w-full flex flex-col pt-16">
                    <Link href='/login' className="btn btn-sm text-xs border-[#000] font-normal rounded-none bg-[#FFF] shadow-none hover:bg-[#000] hover:text-[#FFF] hover:border-[#000]">
                            ALREADY REGISTERED? LOGIN
                    </Link>
                </div>
            </div>
        </div>
    )
}