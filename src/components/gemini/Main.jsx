import "./Main.css";
import { Welcome } from "./Welcome";
import { LoadMessage } from "./LoadMessage";
import { useRef } from "react";
import { Button } from "../../Button";
export function Main({ data, sendMessage }) {
  const containerRef = useRef();
  return (
    <div className="main-container" ref={containerRef}>
      <div className="button">
        <Button />
      </div>
      {data.length ? (
        <LoadMessage data={data} containerRef={containerRef} />
      ) : (
        <Welcome sendMessage={sendMessage} />
      )}
    </div>
  );
}
