import NavbarTwo from "@/components/NavbarTwo";
import Protect from "@/components/Protect";

export default async function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Protect>
            <NavbarTwo />
            {children}
        </Protect>
    );
}
