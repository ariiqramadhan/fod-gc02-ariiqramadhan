import { ObjectId } from "mongodb";

export interface User {
    _id: ObjectId;
    name?: string;
    username: string;
    email: string;
    password: string;
}

export type UserInput = Omit<User, "_id">;

export type Users = User[];

export interface Product {
    _id: ObjectId;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    thumbnail: string;
    images: string[];
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

export type Products = Product[];

export interface Wishlist {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export type WishlistInput = Omit<Wishlist, "_id">