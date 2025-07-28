import React, { useState, useRef } from "react";
import "./CardFlip.css";

function CardFlip({ frontImage, backImage, quote, isNSFW, flipSound }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const audioRef = useRef(new Audio(flipSound));

  const handleFlip = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play().catch((e) => {
      console.warn("❌ Le son du flip ne s’est pas joué :", e);
    });

    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="card-inner">
        <div className="card-front">
          <img src={frontImage} alt="Carte face" />
        </div>
        <div className="card-back">
          <img src={backImage} alt="Dos de carte" />
          <p className="quote">{quote}</p>
        </div>
      </div>
    </div>
  );
}

export default CardFlip;
