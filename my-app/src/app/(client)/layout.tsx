import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Fear Of Dog',
    description: 'Welcome to Fear Of Dog'
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
