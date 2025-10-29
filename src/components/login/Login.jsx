import { useState } from "react";
import EachLoginPage from "./EachLoginPage";
import "./Login.css";
export function Login() {
  const [current, setCurrent] = useState(0);

  const infos = [
    {
      type: "name",
      description: "Enter Your Name",
    },
    {
      type: "city",
      description: "Enter Your Current City",
    },
    {
      type: "footballTeam",
      description: "Enter Your Favorite FootBall Team",
    },
  ];
  return (
    <div
      className="login-container"
      style={{ transform: `translateX(-${100 * current}vw)` }}
    >
      {infos.map((info, i) => {
        return (
          <EachLoginPage
            info={info}
            key={i}
            setCurrent={setCurrent}
            index={i}
          />
        );
      })}
    </div>
  );
}
