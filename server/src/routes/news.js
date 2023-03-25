import express from 'express';
import mongoose from 'mongoose';
import { NewsModel } from "../models/News.js";
import axios from 'axios';
import { UserModel } from '../models/Users.js';
 
const router = express.Router();

// router.get("/", async (req, res) => {
//     try{
//         const response = await NewsModel.find({});
//         res.json(response);
//     }catch(err){
//         res.json(err);
//     }
// });

// router.post("/articles", async (req, res) => {
//     const response = await axios.get('https://newsapi.org/v2/top-headlines',{
//         params: {
//             country: 'us',
//             apikey: 'eedc0d62b5cb463eb969f2124a6bf745'
//         }
//     });
//     try{
//         res.json(response);
//     }catch(err){
//         res.json(err);
//     }
// });

router.get('/', async (req, res) => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          apiKey: 'eedc0d62b5cb463eb969f2124a6bf745',
        },
      });
  
      const articles = response.data.articles;
      res.json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving news');
    }
});


router.put("/", async (req, res) => { 
    try{
        const news = await NewsModel.findById(req.bady.newsID);
        const user = await UserModel.findById(req.body.userID);
        user.savedNews.push(news);
        await user.save();
        res.json(response);
    }catch(err){
        res.json(err);
    }
});

router.get('/savedNews/ids', async (req, res) => {
    try {
      const user = await UserModel.findById(req.bidy.userID);
      res.json({ savedNews: user?.savedNews });
    } catch (error) {
      res.json(err);
    }
});


router.get('/savedNews', async (req, res) => {
    try {
      const user = await UserModel.findById(req.bidy.userID);
      const savedNews = await NewsModel.find({
        _id: { $in: user.savedNews },
      });
      res.json({ savedNews });
    } catch (error) {
      res.json(err);
    }
});

export { router as newsRouter };
