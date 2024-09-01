import { ObjectId } from "mongodb";
import { getDB } from "../config"

const PRODUCTS_COLL = 'products';

export const getProducts = async (search: string, page: number) => {
    const db = await getDB();

    const agg = [
        {
          '$match': {
            'name': {
              '$regex': search, 
              '$options': 'i'
            }
          }
        }, {
          '$skip': (page - 1) * 9
        }, {
          '$limit': 9
        }
    ];

    const products = db.collection(PRODUCTS_COLL);
    const totalData = await products.count({name: {$regex: search, $options: 'i'}});
    const cursor = products.aggregate(agg);
    const data = await cursor.toArray();

    return {totalData, data};
}

export const getProductsById = async (_id: string) => {
    const db = await getDB();

    const products = db.collection(PRODUCTS_COLL);
    const findProduct = await products.findOne({_id: new ObjectId(_id)});

    return findProduct;
}

export const getNewestProducts = async () => {
    const db = await getDB();

    const agg = [
        {
          '$sort': {
            'createdAt': -1
          }
        }, {
          '$limit': 10
        }
    ];
    const products = db.collection(PRODUCTS_COLL);
    const cursor = products.aggregate(agg);
    const data = await cursor.toArray();
      
    return data;
}