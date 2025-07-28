import React, { useState, useRef, useEffect } from "react";
import CardFlip from "./components/CardFlip";
import DreamDrop from "./components/DreamDrop";
import "./App.css";
import flipSound from "/sounds/flip.mp3";
import transitionSound from "/sounds/transition.mp3";
import themeSoft from "/sounds/themeSoft.mp3";
import themeNsw from "/sounds/themeNsw.mp3";

function App() {
  const [isNSFWMode, setIsNSFWMode] = useState(false);
  const [showNSFW, setShowNSFW] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioSoftRef = useRef(new Audio(themeSoft));
  const audioNSFWRef = useRef(new Audio(themeNsw));
  const transitionAudio = useRef(new Audio(transitionSound));

  useEffect(() => {
    const audio = isNSFWMode ? audioNSFWRef.current : audioSoftRef.current;
    audio.loop = true;
    if (musicPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
    return () => audio.pause();
  }, [musicPlaying, isNSFWMode]);

  const playTransition = () => {
    transitionAudio.current.currentTime = 0;
    transitionAudio.current.play();
  };

  const handleNSFWAccess = () => {
    const pwd = prompt("Mot de passe requis 🧿");
    if (pwd === "LeilaDreamX") {
      setShowNSFW(true);
      setIsNSFWMode(true);
      playTransition();
    } else {
      alert("Mot de passe incorrect !");
    }
  };

  const handleBackToSoft = () => {
    setShowNSFW(false);
    setIsNSFWMode(false);
    playTransition();
  };

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const cardsData = [
    {
      frontImage: "/images/cards/carte1.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "La douceur est une force.",
    },
    {
      frontImage: "/images/cards/carte2.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Rêver, c'est déjà résister.",
    },
    {
      frontImage: "/images/cards/carte3.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "L’amour ne s’excuse jamais.",
    },
    {
      frontImage: "/images/cards/carte4.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Être soi est révolutionnaire.",
    },
    {
      frontImage: "/images/cards/carte5.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Chaque regard contient un monde.",
    },
  ];

  const nsfwCardsData = [
    {
      frontImage: "/images/cards/nsfw/carte1.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Tu découvres un désir sans filtre.",
    },
    {
      frontImage: "/images/cards/nsfw/carte2.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "La peau parle en frissons.",
    },
    {
      frontImage: "/images/cards/nsfw/carte3.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Un souffle peut dire je t'aime.",
    },
    {
      frontImage: "/images/cards/nsfw/carte4.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Regarde-moi avec les mains.",
    },
    {
      frontImage: "/images/cards/nsfw/carte5.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Ton corps connaît le chemin.",
    },
  ];

  const displayedCards = showNSFW ? nsfwCardsData : cardsData;

  return (
    <div className={`App ${isNSFWMode ? "nsfw-mode" : "soft-mode"}`}>
      <h1>{showNSFW ? "Rêve Interdit ✦" : "Rêve Doux ✦"}</h1>

      <div className="menu">
        {!showNSFW ? (
          <button onClick={handleNSFWAccess}>Mode NSFW 🔓</button>
        ) : (
          <button onClick={handleBackToSoft}>Retour Soft 🔒</button>
        )}
        <button onClick={toggleMusic}>
          {musicPlaying ? "⏸ Couper Musique" : "▶️ Lecture Musique"}
        </button>
      </div>

      <div className="card-container">
        {displayedCards.map((card, index) => (
          <CardFlip
            key={index}
            frontImage={card.frontImage}
            backImage={card.backImage}
            quote={card.quote}
            isNSFW={isNSFWMode}
            flipSound={flipSound}
          />
        ))}
      </div>

      <DreamDrop isNSFW={isNSFWMode} />
    </div>
  );
}

export default App;
