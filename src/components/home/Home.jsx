import "./Home.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export function Home({ weather, news }) {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo);
  const toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  const date = new Date();

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
                  <p style={{ marginTop: "-15px" }}>{userInfo.city}</p>
                  <p
                    style={{
                      fontSize: "21px",
                      marginLeft: "10px",
                      marginTop: "-5px",
                    }}
                  >
                    {weather.weather[0].description}
                  </p>
                </>
              )}
            </div>
          </div>
          <div
            className="weather"
            onClick={() => {
              navigate("weather");
            }}
          >
            <h1>Eplore the weather all over the world</h1>
          </div>
          <div
            className="news"
            onClick={() => {
              navigate("/football-news");
            }}
          >
            <h1>Football News</h1>
            {news.length > 0 ? (
              <div className="article-container">
                {news.slice(0, 3).map((n, i) => {
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
            ) : (
              <div className="loading">
                <div className="spinner"></div>
              </div>
            )}
          </div>
          <div className="todo">
            {toDoList.length > 0 ? (
              <div className="todo-list-container">
                {toDoList.map((toDo, i) => {
                  return (
                    <div className="to-do" key={i}>
                      {toDo.title}
                    </div>
                  );
                })}
              </div>
            ) : (
              <h1 style={{ alignSelf: "center" }}>
                Seems Like You are free Today
              </h1>
            )}
          </div>
          <div
            className="chat"
            onClick={() => {
              navigate("gemini");
            }}
          >
            <h1>Come Chat With Me</h1>
            <img src="chat/chat.svg" className="left-chat" />
            <img src="chat/chat.svg" className="right-chat" />
          </div>
        </div>
      </main>
    </div>
  );
}
