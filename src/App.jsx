import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { Login } from "./components/login/Login";
import { Home } from "./components/home/Home";
import { FootballNews } from "./components/football-news/FootballNews.jsx";
import { Weather } from "./components/weather/Weather.jsx";
import { Sidebar } from "./components/gemini/Sidebar";
import { MainPage } from "./components/gemini/MainPage";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./App.css";
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
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
          `https://newsapi.org/v2/everything?q=${
            userInfo.footballTeam
          }&language=en&apiKey=${import.meta.env.VITE_FOOTBALL_NEWS_API_KEY}`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    }
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //GEMINI

  const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-pro" });
  async function sendMessage(myText, fromHistory = false) {
    if (!myText.trim()) return;
    const newMessages = fromHistory
      ? [
          {
            text: myText,
            sender: "user",
          },
        ]
      : [...data, { text: myText, sender: "user" }];
    setData(newMessages);
    setData([
      ...newMessages,
      {
        text: (
          <>
            <span>
              <div></div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta,
              reiciendis.
            </span>
            <span>
              <div></div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, sit.
            </span>
            <span>
              <div></div>Lorem ipsum dolor sit.
            </span>
          </>
        ),
        sender: "robot",
      },
    ]);
    const historyShort =
      myText.trim().length < 14
        ? myText.trim()
        : myText.slice(0, 14).trim() + " ...";
    if (!fromHistory)
      setHistoryData([
        ...historyData,
        {
          text: myText,
          shortText: historyShort,
        },
      ]);
    try {
      const result = await model.generateContent(myText);
      const aiResponse = result.response.text();

      setData([...newMessages, { text: aiResponse, sender: "robot" }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setData([
        ...newMessages,
        {
          text: "Sorry, there was a problem connecting to Gemini.",
          sender: "computer",
        },
      ]);
    }
  }
  function reset() {
    setShow(true);
    setData([]);
    setHistoryData([]);
  }
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const [historyData, setHistoryData] = useState([]);
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      {Object.entries(userInfo).length < 3 ? (
        <Login />
      ) : (
        <Routes>
          <Route index element={<Home weather={weather} news={news} />} />
          <Route path="/football-news" element={<FootballNews news={news} />} />
          <Route path="/weather" element={<Weather />} />
          <Route
            path="/gemini"
            element={
              <div
                className={isDark ? "total-container dark" : "total-container"}
              >
                <Sidebar
                  show={show}
                  setShow={setShow}
                  historyData={historyData}
                  sendMessage={sendMessage}
                  reset={reset}
                />
                <MainPage
                  show={show}
                  sendMessage={sendMessage}
                  data={data}
                  setIsDark={setIsDark}
                  isDark={isDark}
                />
              </div>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
