import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export function Home() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const userInfo = useSelector((state) => state.userInfo);
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);
  const date = new Date();

  useEffect(() => {
    async function loadData() {
      try {
        let response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${userInfo.city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
        response = response = await axios.get(
          "https://newsapi.org/v2/everything?q=Manchester%united&language=en&apiKey=80c723679fc648faacb6c5ec05c50476"
        );
        setNews(response.data.articles.slice(0, 3));
        console.log(response.data.article.slice(0, 3));
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    }
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-container">
      <main>
        <header>
          <h1>Good Morning, {userInfo.name}</h1>
          <button>Click</button>
        </header>
        <div className="grid-container">
          <div className="clock">
            <div>
              <h1 style={{ fontSize: "70px", fontWeight: "normal" }}>
                {date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </h1>
              <p style={{ fontSize: "14px" }}>
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="weather-container">
              {weather && (
                <>
                  <div>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt="Weather Icon"
                    />
                    <h3 style={{ fontWeight: "normal" }}>
                      {Math.round(weather.main.temp)}°
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: "21px",
                      marginLeft: "10px",
                      marginTop: "-10px",
                    }}
                  >
                    {weather.weather[0].description}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="weather"></div>
          <div className="news">
            <h1>Football News</h1>
            <div className="article-container">
              {news &&
                news.map((n, i) => {
                  return (
                    <article key={i}>
                      <img src={n.urlToImage} style={{ width: "100%" }} />
                      <p className="description">
                        {n.description.trim().length <= 54
                          ? n.description
                          : n.description.trim().slice(0, 55) + "..."}
                      </p>
                    </article>
                  );
                })}
            </div>
          </div>
          <div className="todo"></div>
          <div className="chat"></div>
        </div>
      </main>
    </div>
  );
}
