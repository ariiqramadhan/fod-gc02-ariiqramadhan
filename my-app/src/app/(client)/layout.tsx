import Navbar from '@/components/Navbar';
import Promo from '@/components/Promo';
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Promo />
            <div>
                <Navbar />
                {children}
            </div>
        </>
    );
}
