import React, { useState, useEffect, useRef } from "react";

export default function MusicPlayer({ src, volume = 0.1 }) {
  const audioRef = useRef(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = volume;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src, volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        // L’utilisateur doit interagir pour activer le son
      });
    }
  };

  return (
    <button
      onClick={togglePlay}
      className={`music-player-button ${isPlaying ? "playing" : ""}`}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? "🔊 Pause Musique" : "🎵 Jouer Musique"}
    </button>
  );
}
