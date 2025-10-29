import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export function Home() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const userInfo = useSelector((state) => state.userInfo);
  const [weather, setWeather] = useState(null);
  const date = new Date();

  useEffect(() => {
    async function loadData() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${userInfo.city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
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
              <h1 style={{ fontSize: "70px" }}>
                {date.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </h1>
              <p>
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
                    <h3>{Math.round(weather.main.temp)}°C</h3>
                  </div>
                  <p>{weather.weather[0].description}</p>
                </>
              )}
            </div>
          </div>
          <div className="weather"></div>
          <div className="news"></div>
          <div className="todo"></div>
          <div className="chat"></div>
        </div>
      </main>
    </div>
  );
}
