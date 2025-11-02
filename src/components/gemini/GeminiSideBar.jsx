import "./GeminiSideBar.css";
import "./ChatHistory";
import { ChatHistory } from "./ChatHistory";
import { Button } from "../../Button";
import { NavLink } from "react-router-dom";
export function GeminiSideBar({
  show,
  setShow,
  historyData,
  sendMessage,
  reset,
}) {
  function toggleExpand() {
    setShow(!show);
  }
  return (
    <div className={show ? "side-bar expand-side-bar" : "side-bar"}>
      <div className="top-side-bar">
        <div className="humburger-icon" onClick={toggleExpand}>
          <i className="fa-solid fa-bars" />
        </div>
        <div className="new-chat" onClick={reset}>
          <img src="sidebar-icons/plus.png" />
          <p>New Chat</p>
        </div>
        <div className="recent-chat">
          <p>Recent</p>
          {show && (
            <ChatHistory historyData={historyData} sendMessage={sendMessage} />
          )}
        </div>
      </div>
      <div className="bottom-side-bar">
        <NavLink to="/">
          <i className="fa-solid fa-house" />
          <p>Home</p>
        </NavLink>
        <NavLink to="/football-news">
          <i className="fa-solid fa-newspaper" />

          <p>News</p>
        </NavLink>
        <NavLink to="/weather">
          <i className="fa-solid fa-cloud-sun" />

          <p>Weather</p>
        </NavLink>
        <NavLink to="/gemini">
          <i className="fa-solid fa-comments" />

          <p>Gemini</p>
        </NavLink>
        <NavLink to="/todo">
          <i className="fa-solid fa-list-check" />

          <p>Todo</p>
        </NavLink>
        <Button />
      </div>
    </div>
  );
}
