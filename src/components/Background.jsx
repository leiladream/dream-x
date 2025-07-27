import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Background() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: { value: "#0f0c29" } },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          move: { enable: true, speed: 0.8 },
          opacity: { value: 0.5 },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.3,
          },
        },
      }}
    />
  );
}
