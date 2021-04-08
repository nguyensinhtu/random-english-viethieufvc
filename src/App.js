import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import level1 from "./data/level1";
import level3Listening from './data/level3_listening.js';
import audio_data from './data/listening_links';
import topicLevel3 from './data/topic_level3';
import topicAudioData from './data/topic_links'

function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isHideAnswer, setIsHideAnswer] = useState(false);
  const [showListening, setShowListening] = useState(false);
  const [randomMissing, setRandomMissing] = useState(false);

  const zenNextData = (data) => {
    const min = 0;
    const max = data.length;
    let rand = (min + Math.random() * (max - min)) | 0;

    do {
      rand = (min + Math.random() * (max - min)) | 0;
    } while (rand == currentIdx);


    setCurrentIdx(rand);
  };

  const handleKeyPress = (data) => {

    return (event) => {
      if (event.keyCode == 32) {
        zenNextData(data);
      }
    }
  };

  const handleClick = (data) => {
    return (event) => {
      if (event.target.type === 'button') {
        console.log("is burton, don't zen target")
        return;
      }
      zenNextData(data);
    }
  }

  useEffect(() => {
    document.removeEventListener("click", showListening ? handleClick(topicLevel3) : handleClick(level3Listening))
    document.removeEventListener("keypress", showListening ? handleKeyPress(topicLevel3) : handleKeyPress(level3Listening));
    document.addEventListener("keypress", showListening ? handleKeyPress(level3Listening) : handleKeyPress(topicLevel3), false);
    document.addEventListener("click", showListening ? handleClick(level3Listening) : handleClick(topicLevel3), false);
    return () => {
      document.removeEventListener("click", showListening ? handleClick(topicLevel3) : handleClick(level3Listening))
      document.removeEventListener("keypress", showListening ? handleKeyPress(topicLevel3) : handleKeyPress(level3Listening));
    };
  }, [showListening]);

  const renderListening = () => {
    let currentConvers = level3Listening[currentIdx]['text']

    return (<div>
      <h3>{level3Listening[currentIdx]['stt']}</h3>
      <ul style={{ textAlign: 'left', className: 'no-bullets' }}>{currentConvers.map(x => <li>{x}</li>)}</ul>
      {audio_data[level3Listening[currentIdx]['stt']] &&
        <div>
          <iframe id="audio" key={`audio-${currentIdx}`} autoplay allow="autoplay"
            src={audio_data[level3Listening[currentIdx]['stt']]}
          />
        </div>
      }
      <br />
      <br />
      <button type="button" onClick={() => { setRandomMissing(!randomMissing) }}>{randomMissing ? <span>Show missing one</span> : <span>Random missing</span>}</button>
    </div>)
  }

  const renderTopic = () => {
    return (topicLevel3[currentIdx] && <div>
      <h3>{topicLevel3[currentIdx]['stt']}</h3>
      <h3>{topicLevel3[currentIdx]['qs']}</h3>
      {topicAudioData[topicLevel3[currentIdx]['stt']] && topicAudioData[topicLevel3[currentIdx]['stt']]['qst'] &&
        <div>
          <iframe id="audio" key={`audio-${currentIdx}`} autoplay allow="autoplay"
            src={topicAudioData[topicLevel3[currentIdx]['stt']]['qst']}
          />
        </div>
      }
      {isHideAnswer &&
        <div>
          <h3>A: {topicLevel3[currentIdx]['a']}</h3>
          {topicAudioData[topicLevel3[currentIdx]['stt']]['ans'] &&
            <audio key={`audio-as-${currentIdx}`} controls loop autoplay >
              <source src={topicAudioData[topicLevel3[currentIdx]['stt']]['ans']} />
            </audio>
          }
        </div>
      }
      {isHideAnswer && <h3>YA: {topicLevel3[currentIdx]['ya']}</h3>}

    </div>)
  }

  return (
    <div className="App">
      <header className="App-header">{showListening ? renderListening() :
        renderTopic()}
        <br />
        <br />
        <br />
        <p style={{ fontSize: 12 }}>Press Space or Click</p>
        <br />
        {!showListening && <button type="button" onClick={() => { setIsHideAnswer(!isHideAnswer) }}>Show or hide your answer</button>}
        <button type="button" onClick={() => { setShowListening(!showListening) }}>{showListening ? <span>change to Topic</span> : <span>change to Listening</span>}</button>
      </header>
    </div>
  );
}

export default App;
