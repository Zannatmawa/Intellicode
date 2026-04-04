import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME;

export const collections = {
    COURSES: "courses",
    USERS: "users",
};

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

// let isConnected = false;

// // Connect to MongoDB once
// const connectDB = async () => {
//     if (!isConnected) {
//         await client.connect();
//         isConnected = true;
//         console.log("✅ MongoDB Connected");
//     }
// };

// Return a collection
export const dbConnect = async (cname) => {
    return client.db(dbname).collection(cname);
};