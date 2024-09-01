import { BASE_URL } from "@/constant";
import { UserInput } from "@/types";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Sign Up to Fear Of Dog',
    description: 'Sign Up new account for Fear Of Dog website'
}

export default function Register({ searchParams } : { searchParams: { error: string } }) {
    const { error } = searchParams;
    async function handleRegister(formData: FormData) {
        "use server"

        const newUser = {
            name: formData.get('name'),
            username: formData.get('username') || null,
            email: formData.get('email') || null,
            password: formData.get('password') || null
        }
        const res = await fetch(BASE_URL + '/api/register', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const data = await res.json();

        if (!res.ok) {
            return redirect(`/register?error=${data.message}`);
        }
        
        return redirect('/login');
    }
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-16">
            <h1 className="text-5xl font-bold select-none">FEAR OF DOG</h1>
            <div className="w-2/5">
                <form action={handleRegister} className="w-full flex flex-col gap-4">
                    {error ? <div className='w-full border border-red-400'>
                        <p className='p-2 text-center text-red-400 text-sm'>{error.toUpperCase()}</p>
                    </div> : ''}
                    <input
                        type="text"
                        name="name"
                        placeholder="NAME"
                        className="font-thin text-sm border border-[#CCC] focus:border-[#000] focus:outline-none w-full p-2"
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="USERNAME *"
                        className="font-thin text-sm border border-[#CCC] focus:border-[#000] focus:outline-none w-full p-2"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="EMAIL *"
                        className="font-thin text-sm border border-[#CCC] focus:border-[#000] focus:outline-none w-full p-2"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="PASSWORD *"
                        className="font-thin text-sm border border-[#CCC] focus:border-[#000] focus:outline-none w-full p-2"
                    />
                    <button 
                        className="btn btn-sm text-xs border-[#000] font-light rounded-none bg-[#FFF] shadow-none hover:bg-[#000] hover:text-[#FFF] hover:border-[#000]"
                        type="submit"
                    >
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