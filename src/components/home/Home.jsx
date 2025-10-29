import { FootballNews } from "./FootballNews";
import "./Home.css";
export function Home() {
  return (
    <div className="home-container">
      <main>
        <header>
          <h1>Good Morining, Hire</h1>
          <button>Click</button>
        </header>
        <div className="grid-container">
          <div className="clock"></div>
          <div className="weather"></div>
          <div className="news"></div>
          <div className="todo"></div>
          <div className="chat"></div>
        </div>
      </main>
    </div>
  );
}
