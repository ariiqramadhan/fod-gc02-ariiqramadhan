import { UserInput } from "@/types";
import { hashPassword } from "../helpers/bcrypt";
import { getDB } from "../config";
import { ObjectId } from "mongodb";

const USER_COLL = "users";

export const addUser = async (newUser: UserInput) => {
    const db = await getDB();
    const users = db.collection(USER_COLL);


    newUser.password = hashPassword(newUser.password);
    // const modifiedInput = {
    //     ...newUser,
    //     password: hashPassword(newUser.password)
    // }
    const checkUsername = await users.findOne({ username: newUser.username });
    if (checkUsername) {
        throw new Error('Username must be unique!', {cause: 'UNIQUE_CONSTRAINT'});
    }
    const checkEmail = await users.findOne({ email: newUser.email });
    if (checkEmail) {
        throw new Error('Email must be unique!', {cause: 'UNIQUE_CONSTRAINT'});
    }

    const data = await users.insertOne(newUser);
    return data;
}

export const getUserByUsername = async (username: string) => {
    const db = await getDB();
    const users = db.collection(USER_COLL);

    const findUser = await users.findOne({ username });
    return findUser;
}

export const getUserById = async (_id: string) => {
    const db = await getDB();

    const users = db.collection(USER_COLL);
    const findUser = await users.findOne({_id: new ObjectId(_id)}, {projection: {password: 0}});
    return findUser;
}