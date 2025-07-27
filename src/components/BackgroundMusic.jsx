import React, { useRef, useEffect } from "react";
import CardFlip from "./components/CardFlip";
import "./style.css";

export default function App() {
  const flipSound = useRef(new Audio("/sounds/flip-sound.mp3"));
  const bgMusic = useRef(new Audio("/sounds/background-music.mp3"));

  useEffect(() => {
    bgMusic.current.loop = true;
    bgMusic.current.volume = 0.1; // volume discret
    bgMusic.current.play().catch(() => {
      // play peut échouer si l'utilisateur n'a pas interagi, pas grave
    });

    return () => {
      bgMusic.current.pause();
    };
  }, []);

  const cards = [
    {
      frontImage: "/images/cards/carte1.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Laissez la magie vous guider ✨",
    },
    {
      frontImage: "/images/cards/carte2.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Chaque rêve commence par un pas",
    },
    {
      frontImage: "/images/cards/carte3.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Croyez en vous, toujours",
    },
    {
      frontImage: "/images/cards/carte4.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "La force vient de l'intérieur",
    },
    {
      frontImage: "/images/cards/chat-flip.png",
      backImage: "/images/cards/dos-carte.png",
      quote: "Je suis le Chat du rêve! 🐾",
    },
  ];

  return (
    <div className="deck">
      {cards.map((card, idx) => (
        <CardFlip
          key={idx}
          frontImage={card.frontImage}
          backImage={card.backImage}
          quote={card.quote}
          flipSound={flipSound.current}
        />
      ))}
    </div>
  );
}
