import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";

export function Sidebar() {
  const [expand, setExpand] = useState(true);
  return (
    <nav className={`sidebar-nav ${expand && "expand-nav"}`}>
      <button>
        <i className="" />
      </button>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/football-news">Football News</NavLink>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/gemini">Gemini</NavLink>
      <NavLink to="/todo">Todo</NavLink>
    </nav>
  );
}
