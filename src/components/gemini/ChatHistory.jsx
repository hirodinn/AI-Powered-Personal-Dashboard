import { useEffect, useRef } from "react";
import "./ChatHistory.css";
export function ChatHistory({ historyData, sendMessage }) {
  const historyRef = useRef(null);
  useEffect(() => {
    const containerElem = historyRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [historyData]);
  return (
    <div className="history" ref={historyRef}>
      {historyData.map((eachHistory) => {
        return (
          <div
            key={crypto.randomUUID()}
            className="each-history"
            onClick={() => {
              sendMessage(eachHistory.text, true);
            }}
          >
            <img src="box-icons/message.png" />
            {eachHistory.shortText}
          </div>
        );
      })}
    </div>
  );
}
