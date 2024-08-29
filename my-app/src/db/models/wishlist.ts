import { WishlistInput } from "@/types"
import { getDB } from "../config"
import { ObjectId } from "mongodb";

const PRODUCTS_COLL = 'products';
const WISHLIST_COLL = 'wishlist'

export const addWishlist = async (input: WishlistInput) => {
    const db = await getDB();
    const products = db.collection(PRODUCTS_COLL);
    const findProduct = await products.findOne({_id: input.productId});
    
    if (!findProduct) {
        throw new Error('Product not found!', { cause: 'NOT_FOUND' });
    }

    const wishlist = db.collection(WISHLIST_COLL);
    const data = await wishlist.insertOne(input);
    return data;
}