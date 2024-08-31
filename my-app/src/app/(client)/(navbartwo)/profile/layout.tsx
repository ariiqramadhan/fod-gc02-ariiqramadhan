import NavbarTwo from "@/components/NavbarTwo";
import Protect from "@/components/Protect";

export default async function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Protect>
            {children}
        </Protect>
    );
}
