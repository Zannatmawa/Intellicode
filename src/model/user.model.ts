import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

export const User = models.User || model("User", UserSchema);

//zannatulmawa33@gmail.com  zannatul33
//zannatulmawa31@gmail.com   zannatul33