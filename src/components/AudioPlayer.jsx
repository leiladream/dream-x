import React, { useRef, useState } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";
import "./AudioPlayer.css";

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) => console.warn("Lecture audio bloquée :", err));
    }
  };

  return (
    <div className="audio-player" onClick={toggleAudio}>
      {playing ? <FaMusic /> : <FaVolumeMute />}
      <audio ref={audioRef} src="/audio/music.mp3" loop />
    </div>
  );
}
