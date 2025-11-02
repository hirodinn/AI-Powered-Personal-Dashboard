import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";
import { Button } from "../../Button";
export function Sidebar() {
  const [expand, setExpand] = useState(true);
  return (
    <nav className={`sidebar-nav ${expand && "expand-nav"}`}>
      <button
        onClick={() => {
          setExpand(!expand);
        }}
      >
        <i className="fa-solid fa-bars" />
      </button>
      <NavLink to="/">
        <i className="fa-solid fa-house" />
        <p>Home</p>
      </NavLink>
      <NavLink to="/news">
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
    </nav>
  );
}
