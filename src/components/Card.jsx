import React, { useState } from "react";
import "./Card.css";

export default function Card({ text, image }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);

    // Son au flip
    const flipSound = new Audio("/audio/flip.mp3");
    flipSound.play().catch((e) => console.warn("Son non joué :", e));
  };

  return (
    <div className="card" onClick={handleFlip}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div className="card-face card-front">
          <img src={image} alt="card front" className="card-img" />
        </div>
        <div className="card-face card-back">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
