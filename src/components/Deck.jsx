import React from "react";
import CardFlip from "./CardFlip";

const cards = [
  {
    frontImage: "/images/cards/carte1.png",
    backImage: "/images/cards/dos-carte.png",
    quote: "La vie est un mystère qu’il faut vivre, et non un problème à résoudre.",
  },
  {
    frontImage: "/images/cards/carte2.png",
    backImage: "/images/cards/dos-carte.png",
    quote: "Rappelle-toi que tu es plus courageux que tu ne le crois.",
  },
  {
    frontImage: "/images/cards/carte3.png",
    backImage: "/images/cards/dos-carte.png",
    quote: "Même les petites étoiles brillent dans l’obscurité.",
  },
];

export default function Deck() {
  return (
    <div className="deck">
      {cards.map((card, index) => (
        <CardFlip key={index} {...card} />
      ))}
    </div>
  );
}
