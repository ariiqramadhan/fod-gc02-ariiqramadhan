import { BASE_URL } from '@/constant';
import { User } from '@/types';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Profile() {
    async function handleLogout() {
        'use server';

        if (cookies().get('Authorization')) {
            cookies().delete('Authorization');
            redirect('/');
        }
    }
    const data = await fetch(BASE_URL + '/api/profile', {
        headers: {
            Cookie: cookies().toString()
        }
    });
    const user = (await data.json()) as Omit<User, 'password'>;
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-16">
            <div className="w-2/5">
                <h1 className="text-lg font-normal select-none">
                    ACCOUNT DETAILS
                </h1>
                <h1 className="font-light">{user.name}</h1>
                <h1 className="font-light">{user.email}</h1>

                <div className="mt-16">
                    <p className="font-light text-xs mb-8">INDONESIA</p>
                    <form action={handleLogout}>
                        <button
                            className="w-full btn rounded-none bg-[#FFF] border border-[#000] font-light hover:bg-[#000] hover:text-[#FFF] text-xs hover:border-[#000]"
                            type='submit'
                        >
                            LOGOUT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
