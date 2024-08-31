import { getDB } from "../config"

const PRODUCTS_COLL = 'products';

export const getProducts = async (search: string, page: number) => {
    const db = await getDB();

    const agg = [
        {
          '$match': {
            'name': {
              '$regex': '', 
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
    const totalData = await products.count();
    const cursor = products.aggregate(agg);
    const data = await cursor.toArray();

    return {totalData, data};
}