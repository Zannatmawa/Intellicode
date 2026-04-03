// import { NextResponse } from "next/server";
// import connectDB from "@/lib/db"; // Adjust path to your db file
// import User from "@/model/user.model"; // Adjust path to your model
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//     try {
//         await connectDB(); // 1. Connect to the DB

//         const body = await req.json();
//         const { name, email, password } = body;

//         // 2. Validation
//         if (!name || !email || !password) {
//             return NextResponse.json({ message: "All fields are required" }, { status: 400 });
//         }

//         // 3. Check if user already exists
//         const userExists = await User.findOne({ email });
//         if (userExists) {
//             return NextResponse.json({ message: "User already registered" }, { status: 400 });
//         }

//         // 4. Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // 5. Create user in MongoDB
//         const newUser = await User.create({
//             name,
//             email,
//             password: hashedPassword
//         });

//         return NextResponse.json(
//             { message: "User registered successfully ✅", user: { name: newUser.name, email: newUser.email } },
//             { status: 201 }
//         );

//     } catch (error) {
//         return NextResponse.json(
//             { message: "Something went wrong", error: error.message },
//             { status: 500 }
//         );
//     }
// }