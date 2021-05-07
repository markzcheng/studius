import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import "./Study.css";
import colors from "../Assets/colors.js"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
        return <div className="timer">Done!</div>;
    }
  
    return (
        <div className="timer">
            <div className="value">{remainingTime}</div>
            <h4>seconds</h4>
      </div>
    );
};


function StudyScreen() {
    const [timerIsOn, setTimerIsOn] = useState(false);
    const [key, setKey] = useState(0);

    return (
        <div className="App">
            <h1 className="top-text">start focusing</h1>

            <div className="timer-wrapper">
                <div className="timer-box">
                    <div className="timer-bg">
                        <CountdownCircleTimer
                            key={key}
                            isPlaying={timerIsOn}
                            duration={10}
                            colors={[[colors.darkPurple]]}
                            trailColor={[colors.lightPurple]}
                            onComplete={() => [false, 1500]}
                            size={250}
                            strokeWidth={18}
                            rotation={"counterclockwise"}
                        >
                            {renderTime}
                        </CountdownCircleTimer>
                    </div>
                </div>
            </div>
            
            <p className="info">
                up next:
                5 minute break
            </p>

            <div className="buttonHolder"> 
                <button className="startButton" onClick={() => setTimerIsOn(true)}>start</button>
                <button className="pauseButton" onClick={() => setTimerIsOn(false)}>pause</button>
            </div>


            <div className="buttonHolder"> 
                <button className="historyButton" onClick={function() { alert('click'); }}>history</button>
                <button className="resetButton" onClick={() => setKey(prevKey => prevKey + 1)}>reset</button>
            </div>

        </div>
    );
}

export default StudyScreen;