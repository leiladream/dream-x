import React from "react";
import "../App.css";

const CardFlip = ({ frontImage, backImage, quote }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={frontImage} alt="Recto de la carte" />
        </div>
        <div className="card-back" data-quote={quote}>
          <img src={backImage} alt="Verso de la carte" />
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
