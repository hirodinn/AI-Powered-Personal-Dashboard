import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { Login } from "./components/login/Login";
import { Home } from "./components/home/Home";
import { FootballNews } from "./components/home/FootballNews.jsx";
function App() {
  const userInfo = useSelector((state) => state.userInfo);
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        let response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            userInfo.city
          }&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
        );
        setWeather(response.data);
        response = await axios.get(
          `https://newsapi.org/v2/everything?q=Manchester%20united&language=en&apiKey=${
            import.meta.env.VITE_FOOTBALL_NEWS_API_KEY
          }`
        );
        setNews(response.data.articles);
        console.log(response.data.articles.slice(0, 3));
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    }
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {Object.entries(userInfo).length < 3 ? (
        <Login />
      ) : (
        <Routes>
          <Route index element={<Home weather={weather} news={news} />} />
          <Route path="/football-news" element={<FootballNews news={news} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
