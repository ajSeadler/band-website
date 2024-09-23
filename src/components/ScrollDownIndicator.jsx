import React from "react";
import { FaChevronDown } from "react-icons/fa"; // Import an arrow icon
import "../styles/ScrollDownIndicator.css"; // Create a CSS file for styling

const ScrollDownIndicator = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector(".shop-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="parent-container">
      <div className="scroll-down-indicator" onClick={scrollToNextSection}>
        <FaChevronDown />
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
