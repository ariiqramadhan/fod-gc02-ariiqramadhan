import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const signToken = (payload: any) => {
    return jwt.sign(payload, JWT_SECRET);
}