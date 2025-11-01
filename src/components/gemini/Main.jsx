import "./Main.css";
import { Welcome } from "./Welcome";
import { LoadMessage } from "./LoadMessage";
import { useRef } from "react";
export function Main({ data, sendMessage }) {
  const containerRef = useRef();
  return (
    <div className="main-container" ref={containerRef}>
      {data.length ? (
        <LoadMessage data={data} containerRef={containerRef} />
      ) : (
        <Welcome sendMessage={sendMessage} />
      )}
    </div>
  );
}
