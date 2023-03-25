import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import axios from 'axios';
import { userRouter } from "./routes/users.js";
import { newsRouter } from "./routes/news.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/news", newsRouter);

mongoose.connect(
    "mongodb+srv://anandkomati12:anand303@news.9swoqj2.mongodb.net/news?retryWrites=true&w=majority",
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( err ));


app.listen(3001, () => console.log("SERVER STARTED!"));