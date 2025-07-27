import React from "react";

export default function BackgroundGradient() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: `linear-gradient(270deg, #55CDFC, #F7A8B8, #FFFFFF, #F7A8B8, #55CDFC)`,
        backgroundSize: "1000% 1000%",
        animation: "gradientAnimation 15s ease infinite",
        zIndex: -1,
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
}
