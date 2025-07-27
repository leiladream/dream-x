import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const particlesInit = async (engine) => {
  console.log("tsParticles engine loaded");
  await loadSlim(engine);
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

