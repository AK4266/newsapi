import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{ type: String, required: true, unique: true },
    password:{ type: String, required: true },
    savedNews: [{ type: mongoose.Schema.Types.ObjectId, ref: "news" }],
});



export const UserModel = mongoose.model("users", UserSchema);