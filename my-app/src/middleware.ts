import { cookies, headers } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './db/helpers/jwt';

interface TypeJWT {
    _id: string;
    username: string;
    protectedHeader: {
        alg: string;
        typ: string;
    }
}
 
export async function middleware(req: NextRequest) {
    if (req.url.includes('/wishlist')) {
        const auth = cookies().get('Authorization');

        if (!auth) {
            return NextResponse.json({message: 'Authentication failed!'}, { status: 401 });
        }

        const token = auth.value.split(' ')[1];
        if (!token) {
            return NextResponse.json({message: 'Authentication failed!'}, { status: 401 });
        }

        const { payload } = await verifyToken<TypeJWT>(token);
        const reqHeaders = new Headers(req.headers);
        reqHeaders.set('x-user-id', payload._id);
        reqHeaders.set('x-user-username', payload.username);

        const response = NextResponse.next({
            request: {
                headers: reqHeaders
            }
        });

        return response;
    }
}
 
export const config = {
  matcher: '/api/:path*',
}