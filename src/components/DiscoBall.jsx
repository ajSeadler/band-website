import React, { useEffect } from "react";
import "../styles/DiscoBall.css"; // Assuming you create a separate CSS file for disco ball styles

const DiscoBall = () => {
  useEffect(() => {
    const radius = 25.5; // Reduced to half
    const squareSize = 3.325; // Reduced to half
    const prec = 19.55;
    const fuzzy = 0.001;
    const inc = (Math.PI - fuzzy) / prec;
    const discoBall = document.getElementById("discoBall");

    for (let t = fuzzy; t < Math.PI; t += inc) {
      const z = radius * Math.cos(t);
      const currentRadius =
        Math.abs(
          radius * Math.cos(0) * Math.sin(t) -
            radius * Math.cos(Math.PI) * Math.sin(t)
        ) / 2.5;
      const circumference = Math.abs(2 * Math.PI * currentRadius);
      const squaresThatFit = Math.floor(circumference / squareSize);
      const angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;

      for (let i = angleInc / 2 + fuzzy; i < Math.PI * 2; i += angleInc) {
        const square = document.createElement("div");
        const squareTile = document.createElement("div");
        squareTile.style.width = `${squareSize}px`;
        squareTile.style.height = `${squareSize}px`;
        squareTile.style.transformOrigin = "0 0 0";
        squareTile.style.webkitTransformOrigin = "0 0 0";
        squareTile.style.webkitTransform = `rotate(${i}rad) rotateY(${t}rad)`;
        squareTile.style.transform = `rotate(${i}rad) rotateY(${t}rad)`;

        if ((t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)) {
          squareTile.style.backgroundColor = randomColor("bright");
        } else {
          squareTile.style.backgroundColor = randomColor("any");
        }

        square.appendChild(squareTile);
        square.className = "square";
        squareTile.style.webkitAnimation = "reflect 2s linear infinite";
        squareTile.style.webkitAnimationDelay = `${String(
          randomNumber(0, 20) / 10
        )}s`;
        squareTile.style.animation = "reflect 2s linear infinite";
        squareTile.style.animationDelay = `${String(
          randomNumber(0, 20) / 10
        )}s`;
        squareTile.style.backfaceVisibility = "hidden";

        const x = radius * Math.cos(i) * Math.sin(t);
        const y = radius * Math.sin(i) * Math.sin(t);
        square.style.webkitTransform = `translateX(${Math.ceil(
          x
        )}px) translateY(${y}px) translateZ(${z}px)`;
        square.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;

        discoBall.appendChild(square);
      }
    }
  }, []); // Empty dependency array ensures useEffect runs only once

  const randomColor = (type) => {
    let c;
    if (type === "bright") {
      c = randomNumber(130, 255);
    } else {
      c = randomNumber(110, 190);
    }
    return `rgb(${c},${c},${c})`;
  };

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div>
      <div id="discoBallLight"></div>
      <div id="discoBall">
        <div id="discoBallMiddle"></div>
      </div>
    </div>
  );
};

export default DiscoBall;
