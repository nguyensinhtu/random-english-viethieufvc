import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import level1 from "./data/level1";
import level2 from './data/level2_topic';
import audio_data from './data/links';

console.log('level2: ', level2)

function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHideAnswer, setIsHideAnswer] = useState(false);

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
    if (event.target.type === 'button'){
      console.log("is buuton, don't zen target")
      return;
    }

    zenNextData();
  }

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress, false);
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("keypress", handleKeyPress, false);
    };
  }, []);

  console.log(level2[currentIdx]);

  return (
    <div className="App">
      <header className="App-header">
        <h3>{level2[currentIdx]['stt']} - {level2[currentIdx]['q']}</h3>
        {audio_data[level2[currentIdx]['stt']] &&
          <div>
            <iframe id="audio" key={`audio-${currentIdx}`} autoplay allow="autoplay"
              src={audio_data[level2[currentIdx]['stt']]['qs']}
            />
          </div>
        }
        {isHideAnswer &&
          <div>
            <h3>A: {level2[currentIdx]['a']}</h3>
            {audio_data[level2[currentIdx]['stt']] &&
              <audio key={`audio-as-${currentIdx}`} controls loop autoplay >
                <source src={audio_data[level2[currentIdx]['stt']]['as']} />
              </audio>
            }
          </div>
        }
        {isHideAnswer && <h3>YA: {level2[currentIdx]['ya']}</h3>}
        <br />
        <br />
        <br />
        <p style={{ fontSize: 12 }}>Press Space or Click</p>
        <br />
        <button type="button" onClick={() => { setIsHideAnswer(!isHideAnswer) }}>Show or hide your answer</button>
      </header>
    </div>
  );
}

export default App;
