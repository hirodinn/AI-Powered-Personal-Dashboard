import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import { useState } from "react";
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

  //GEMINI END

  return (
    <>
      {Object.entries(userInfo).length < 4 ? (
        <Login />
      ) : (
        <div className={userInfo.darkMode ? "root dark-mode" : "root"}>
          <Routes>
            <Route
              index
              element={
                <Home
                  weather={weather}
                  news={news}
                  setWeather={setWeather}
                  setNews={setNews}
                />
              }
            />
            <Route
              path="/football-news"
              element={<FootballNews news={news} />}
            />
            <Route path="/weather" element={<Weather />} />
            <Route
              path="/gemini"
              element={
                <div className="gemini-total-container">
                  <Sidebar
                    show={show}
                    setShow={setShow}
                    historyData={historyData}
                    sendMessage={sendMessage}
                    reset={reset}
                  />
                  <MainPage show={show} sendMessage={sendMessage} data={data} />
                </div>
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
