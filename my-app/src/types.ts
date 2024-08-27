import { ObjectId } from "mongodb";

export interface User {
    _id: ObjectId;
    name?: string;
    username: string;
    email: string;
    password: string;
}

export type Users = User[];