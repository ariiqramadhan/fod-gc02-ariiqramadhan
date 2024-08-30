import NavbarTwo from "@/components/NavbarTwo";

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
