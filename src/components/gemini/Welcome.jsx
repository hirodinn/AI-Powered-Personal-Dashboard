import "./Welcome.css";
export function Welcome({ sendMessage }) {
  const boxes = [
    {
      text: "Suggest beautiful places to see on an upcoming road trip",
      imgSrc: "navigate",
    },
    {
      text: "Briefly summarize this concept: urban planning",
      imgSrc: "insight",
    },
    {
      text: "Brainstorm team bonding activities for our work retreat",
      imgSrc: "message",
    },
    {
      text: "Tell me about React js and React native",
      imgSrc: "code",
    },
  ];
  return (
    <div className="welcome-container">
      <h1>Hello, Dev</h1>
      <h1>How can I help You Today</h1>
      <div className="box-container">
        {boxes.map((box) => {
          return (
            <div
              className="box"
              key={crypto.randomUUID()}
              onClick={() => {
                sendMessage(box.text);
              }}
            >
              <p>{box.text}</p>
              <img src={`box-icons/${box.imgSrc}.png`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
