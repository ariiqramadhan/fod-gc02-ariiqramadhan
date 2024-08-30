import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Profile() {
    async function handleLogout() {
        'use server';

        if (cookies().get('Authorization')) {
            cookies().delete('Authorization');
            redirect('/');
        }
    }
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-16">
            <div className="w-2/5">
                <h1 className="text-lg font-normal select-none">
                    ACCOUNT DETAILS
                </h1>
                <h1 className="font-light">NAMA AING</h1>
                <h1 className="font-light">EMAIL</h1>

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
