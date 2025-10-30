import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/football-news">Football News</NavLink>
      <NavLink to="/weather">Weather</NavLink>
      <NavLink to="/todo">Football News</NavLink>
      <NavLink to="/gemini">Football News</NavLink>
    </nav>
  );
}
