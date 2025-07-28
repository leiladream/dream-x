import React, { useState, useRef } from "react";
import "./CardFlip.css";

function CardFlip({ frontImage, backImage, quote, flipSound }) {
  const [flipped, setFlipped] = useState(false);
  const audioRef = useRef(new Audio(flipSound));

  const handleFlip = () => {
    setFlipped(!flipped);
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  return (
    <div className="flip-card" onClick={handleFlip}>
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-face flip-card-front">
          <img src={frontImage} alt="Carte face" />
          <div className="quote-container">
            <p className="quote">{quote}</p>
          </div>
        </div>
        <div className="flip-card-face flip-card-back">
          <img src={backImage} alt="Dos carte" />
          <div className="quote-container">
            <p className="quote">{quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFlip;
