import { DATABASE_NAME } from "@/constant";
import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_URI
if (!connectionString) {
    throw new Error('MONGO_URI is not defined');
}

let client: MongoClient;

export const getMongoInstance = async () => {
    if (!client) {
        client = new MongoClient(connectionString);
        await client.connect();
    }

    return client;
}

export const getDB = async () => {
    const client = await getMongoInstance();
    const db = client.db(DATABASE_NAME);

    return db;
}