import NavbarTwo from "@/components/NavbarTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Products | Fear Of Dog',
    description: 'List of all Fear Of Dog products'
}

export default async function ProductsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavbarTwo />
            {children}
        </>
    );
}
