import "./FootballNews.css";

export function FootballNews({ articles }) {
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
