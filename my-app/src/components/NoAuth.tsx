import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function NoAuth({children}: {children: React.ReactNode}) {
    const cookieStore = cookies();
    const auth = cookieStore.get('Authorization');

    if (auth) {
        return redirect('/');
    }

    return (
        <>{children}</>
    )
}