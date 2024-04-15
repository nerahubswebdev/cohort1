import React, { useEffect, useState } from "react";
import "../App.css";

const HomePage = () => {
  const api_key = import.meta.env.VITE_NEWS_API_SECRET;

  const [news, setNews] = useState([]);
  const newsData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
      );
      const thedata = await response.json();
      console.log("theresponse => ", thedata);
      setNews(thedata?.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsData();
  }, []);
  return (
    <div>
      <p>Hello home page</p>
      <div className="articleText">
        {news?.map((article) => (
          <span key={article.url}>{article.author}</span>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
