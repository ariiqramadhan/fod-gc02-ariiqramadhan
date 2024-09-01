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

export const delWishlist = async (wishlistId: ObjectId, userId: string) => {
    const db = await getDB();
    const wishlist = db.collection(WISHLIST_COLL)
    const findWishlist = await wishlist.findOne({_id: wishlistId});
    
    if (!findWishlist) {
        throw new Error('Wishlist not found!', { cause: 'NOT_FOUND' });
    }
    
    if (String(findWishlist.userId) !== userId) {
        throw new Error('You don\'t have privieleges to do this action', { cause: 'FORBIDDEN' });
    }

    const data = await wishlist.deleteOne({ _id: wishlistId });
    return data;
}

export const getWishlistByUser = async (userId: string) => {
    const db = await getDB();

    const agg = [
        {
          '$match': {
            'userId': new ObjectId(userId)
          }
        }, {
          '$lookup': {
            'from': 'products', 
            'localField': 'productId', 
            'foreignField': '_id', 
            'as': 'product'
          }
        }, {
          '$unwind': {
            'path': '$product', 
            'preserveNullAndEmptyArrays': true
          }
        }
      ];

    const wishlist = db.collection(WISHLIST_COLL);
    const cursor = wishlist.aggregate(agg);
    const data = await cursor.toArray();

    return data;
}