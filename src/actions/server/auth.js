"use server";
import { collections, dbConnect } from "../../lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
    try {
        const { name, email, password } = payload;

        if (!email || !password) {
            return { error: "Missing fields" };
        }

        const usersCollection = await dbConnect(collections.USERS);

        const existingUser = await usersCollection.findOne({ email });

        if (existingUser) {
            return { error: "User already exists" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            provider: "credentials",
            name,
            email,
            password: hashedPassword,
            role: "user",
            createdAt: new Date()
        };

        const result = await usersCollection.insertOne(newUser);

        return {
            acknowledged: true,
            insertedId: result.insertedId.toString()
        };

    } catch (error) {
        if (error instanceof Error) {
            return { error: error.message };
        } else {
            return { error: "Unknown error occurred" };
        }
    }
};

export const loginUser = async (payload) => {
    const { email, password } = payload;
    if (!email || !password) return null;


    const usersCollection = await dbConnect(collections.USERS);

    const user = await usersCollection.findOne({ email });

    if (!user) return null;

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (isPasswordMatched) {
        return user;
    }
    else {
        return null;
    }
}

