import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Protect({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies();
    
    const auth = cookieStore.get('Authorization');
    if (!auth) {
        redirect('/');
    }

    if (auth) {
        return <>{children}</>
    }
}