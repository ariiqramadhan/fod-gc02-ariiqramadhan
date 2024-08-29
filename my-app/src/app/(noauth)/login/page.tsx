import { BASE_URL } from '@/constant';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'Sign In to Fear Of Dog',
    description: 'Sign In to your account for Fear Of Dog website'
}

export default function Login() {
    async function handleLogin(formData: FormData) {
        "use server"

        const loginData = {
            username: formData.get('username') || null,
            password: formData.get('password') || null
        }
        const res = await fetch(BASE_URL + '/api/login', {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        if (!res.ok) {
            return redirect(`/login?error=${data.message}`);
        }

        cookies().set('Authorization', `Bearer ${data.access_token}`);
        return redirect('/');
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-16">
            <h1 className="text-5xl font-bold select-none">FEAR OF DOG</h1>
            <div className="w-2/5">
                <form action={handleLogin} className="w-full flex flex-col gap-4">
                    <h1 className="font-thin">LOGIN</h1>
                    <input
                        type="text"
                        placeholder="USERNAME"
                        name='username'
                        className="font-thin text-sm border border-[#CCC] focus:border-[#000] focus:outline-none w-full p-2"
                    />
                    <input
                        type="password"
                        placeholder="PASSWORD"
                        name='password'
                        className="font-thin text-sm border border-[#CCC] focus:border-[#000] focus:outline-none w-full p-2"
                    />
                    <button className="btn btn-sm text-xs border-[#000] font-light rounded-none bg-[#FFF] shadow-none hover:bg-[#000] hover:text-[#FFF] hover:border-[#000]">
                        SIGN IN
                    </button>
                    <h1 className="text-xs select-none w-fit cursor-pointer hover:text-[#ababab]">
                        FORGOT YOUR PASSWORD?
                    </h1>
                </form>
                <div className="w-full flex flex-col pt-16">
                    <Link href='/register' className="btn btn-sm text-xs border-[#000] font-normal rounded-none bg-[#FFF] shadow-none hover:bg-[#000] hover:text-[#FFF] hover:border-[#000]">
                            CREATE AN ACCOUNT
                    </Link>
                </div>
            </div>
        </div>
    );
}
