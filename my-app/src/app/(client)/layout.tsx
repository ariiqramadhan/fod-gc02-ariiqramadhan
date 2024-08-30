import { checkCookies } from '@/actions';
import Navbar from '@/components/Navbar';
import Promo from '@/components/Promo';
export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    let isLogin = await checkCookies();
    return (
        <>
            <Promo />
            <div>
                <Navbar isLogin={isLogin}/>
                {children}
            </div>
        </>
    );
}
