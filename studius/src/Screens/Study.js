import React from "react";
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
            <div className="text">seconds</div>
      </div>
    );
};


function StudyScreen() {
    return (
        <div className="App">
            <h1 className="top-text">start focusing</h1>

            <div className="timer-wrapper">
                <div className="timer-box">
                    <CountdownCircleTimer
                        isPlaying
                        duration={10}
                        colors={[[colors.darkPurple]]}
                        onComplete={() => [true, 1000]}
                        size={250}
                        strokeWidth={18}
                        rotation={"counterclockwise"}
                    >
                        {renderTime}
                    </CountdownCircleTimer>
                </div>
            </div>
            
            <p className="info">
                up next:
                5 minute break
            </p>

            <div className="buttonHolder"> 
                <button className="historyButton" onClick={function() { alert('click'); }}>history</button>
            </div>
            <div className="buttonHolder"> 
                <button className="resetButton" onClick={function() { alert('click'); }}>reset</button>
            </div>

        </div>
    );
}

export default StudyScreen;