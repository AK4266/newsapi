import mongoose from "mongoose";

const NewsSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    title: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        required: true,
    },
    url: {
        type: String, 
        required: true,
    },
    urlToImage: {
        type: String, 
        required: true,
    },
    userOwner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true,
    },
});



export const NewsModel = mongoose.model("news", NewsSchema);