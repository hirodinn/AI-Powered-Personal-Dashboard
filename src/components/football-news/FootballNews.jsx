import { Sidebar } from "../sidebar/Sidebar";
import "./FootballNews.css";

export function FootballNews({ news }) {
  return (
    <div className="football-news-container">
      <Sidebar />
      <div className="football-news">
        <h1>Football news</h1>
        {news &&
          news.map((article, i) => {
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
    </div>
  );
}
