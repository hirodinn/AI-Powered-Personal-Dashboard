import axios from "axios";
import { useEffect, useState } from "react";
import "./FootballNews.css";

export function FootballNews() {
  //const api_key = "80c723679fc648faacb6c5ec05c50476";
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const loadDate = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=Manchester%united&language=en&apiKey=80c723679fc648faacb6c5ec05c50476"
      );
      console.log(response.data);
      setArticles(response.data.articles.slice(0, 20));
    };
    loadDate();
  });
  return (
    <div className="football-news">
      {articles.map((article, i) => {
        return (
          <article key={i}>
            <img src={article.urlToImage} />
            <div className="info-container">
              <p className="title">{article.title}</p>
              <p className="source">{article.source.name}</p>
              <p className="description">{article.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
