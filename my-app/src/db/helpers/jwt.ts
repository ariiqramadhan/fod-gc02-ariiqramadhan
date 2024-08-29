import { jwtVerify } from 'jose';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const signToken = (payload: any) => {
    return jwt.sign(payload, JWT_SECRET);
}

export const verifyToken = async <T>(token: string) => {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const data = await jwtVerify<T>(token, secret);
    return data;
}