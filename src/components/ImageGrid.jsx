import React from "react";
import "../styles/ImageGrid.css";

const images = [
  "/pics/compressed/aj-opolis.jpg",
  "/pics/compressed/aj-opolis.jpg",
  "/pics/compressed/aj-opolis.jpg",
  "/pics/compressed/aj-opolis.jpg",
  "/pics/compressed/aj-opolis.jpg",
  "/pics/compressed/aj-opolis.jpg",
  "/pics/compressed/aj-opolis.jpg",
  "/pics/compressed/aj-opolis.jpg",
  "/pics/compressed/aj-opolis.jpg",
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <div className="image-card" key={index}>
          <img src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
