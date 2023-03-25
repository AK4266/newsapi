import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const getNews = async () => {
        const response = await axios.get('http://localhost:3001/news');
        setNews(response.data);
      };
  
      getNews();
    }, []);
  
    return (
      <div>
        <h1>Latest News</h1>
        <div>
            {news.map((article) => (
            <div className='instructions' key={article.url}>
                <h2><a className='headlines' href={article.url} target="_blank">{article.title}</a></h2>
                <p>{article.description}</p>
                <img src={article.urlToImage} alt={article.title} />
            </div>
            ))}
        </div>
      </div>
    );
  };