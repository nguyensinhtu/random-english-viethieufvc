import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import level1 from "./data/level1";
import level2 from './data/level2_topic';
import audio from './data/links';

console.log('level2: ', level2)

function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [ishide] = useState(true);

  const zenNextData = () => {
    const min = 0;
    const max = level2.length;
    let rand = (min + Math.random() * (max - min)) | 0;

    do {
      rand = (min + Math.random() * (max - min)) | 0;
    } while (rand == currentIdx);

    setCurrentIdx(rand);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode == 32) {
      zenNextData();
    }
  };

  const handleClick = (event) => {
    zenNextData();
  }

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress, false);
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("keypress", handleKeyPress, false);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>{level2[currentIdx]['stt']} - {level2[currentIdx]['q']}</h3>
        <h3>A: {level2[currentIdx]['a']}</h3>
        <h3>YA: {level2[currentIdx]['ya']}</h3>
        {
          audio[level2[currentIdx]] && <audio controls allow={'autoplay'}>
            <source src={audio[level2[currentIdx]['stt']]['qs']} />
          </audio>
        }
        <br />
        <br />
        <br />
        <p style={{ fontSize: 12 }}>Press Space or Click</p>
        <br />
        <button type="button">Show your answer</button>
      </header>
    </div>
  );
}

export default App;
