import "./MainPage.css";
import { Main } from "./Main";
import { useState } from "react";
import { DarkModeButton } from "./DarkModeButton";

export function MainPage({ data, sendMessage, setIsDark, isDark }) {
  const [inputValue, setInputValue] = useState("");

  function updateValue(event) {
    setInputValue(event.target.value);
  }
  // async function sendMessage(myText = inputValue) {
  //   if (!inputValue.trim()) return;
  //   const newMessages = [...data, { text: myText, sender: "user" }];
  //   setData(newMessages);
  //   setInputValue("");
  //   if (myText === inputValue) setHistoryData([...historyData, inputValue]);
  //   try {
  //     const result = await model.generateContent(inputValue);
  //     const aiResponse = result.response.text();

  //     setData([...newMessages, { text: aiResponse, sender: "robot" }]);
  //   } catch (error) {
  //     console.error("Gemini API Error:", error);
  //     setData([
  //       ...newMessages,
  //       {
  //         text: "Sorry, there was a problem connecting to Gemini.",
  //         sender: "computer",
  //       },
  //     ]);
  //   }
  // }
  function clicked() {
    sendMessage(inputValue);
    setInputValue("");
  }
  return (
    <main>
      <header>
        <p>Gemini</p>
        <img src="logo.jpeg" />
      </header>
      <Main data={data} sendMessage={sendMessage} />
      <footer>
        <div className="footer-top">
          <input
            type="text"
            placeholder="Enter a promt here"
            onChange={updateValue}
            value={inputValue}
            onKeyDown={(event) => {
              if (event.key === "Enter") clicked();
            }}
          />
          <img src="footer-icons/gallery.png" />
          <img src="footer-icons/voice.png" />
          <img
            src="footer-icons/send.png"
            onClick={clicked}
            className={inputValue === "" ? "hidden" : ""}
          />
        </div>
        <div className="footer-bottom">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </div>
      </footer>
      <DarkModeButton isDark={isDark} setIsDark={setIsDark} />
    </main>
  );
}
