import React, { useEffect, useState } from "react";
import "./DreamDrop.css";

const softWords = [
  "tendresse", "rêverie", "velours", "paix", "lueur", "frissons",
  "plume", "silence", "respire", "lune", "mirage", "secret"
];

const nsfwWords = [
  "désir", "chaleur", "peau", "souffle", "languir", "mordre",
  "lèche", "regarde", "joue", "explose", "craque", "caresse"
];

const getRandomPosition = () => ({
  top: `${Math.random() * 90}%`,
  left: `${Math.random() * 90}%`,
  fontSize: `${Math.random() * 1.5 + 1}rem`
});

function DreamDrop({ isNSFW }) {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const wordList = isNSFW ? nsfwWords : softWords;
      const newDrop = {
        id: Date.now(),
        word: wordList[Math.floor(Math.random() * wordList.length)],
        style: getRandomPosition()
      };
      setDrops(prev => [...prev, newDrop]);
      setTimeout(() => {
        setDrops(prev => prev.filter(d => d.id !== newDrop.id));
      }, 5000); // duration before fadeout
    }, 3000);

    return () => clearInterval(interval);
  }, [isNSFW]);

  return (
    <div className="dreamdrop-container">
      {drops.map(drop => (
        <span key={drop.id} className={`dreamdrop-word ${isNSFW ? "nsfw" : "soft"}`} style={drop.style}>
          {drop.word}
        </span>
      ))}
    </div>
  );
}

export default DreamDrop;
