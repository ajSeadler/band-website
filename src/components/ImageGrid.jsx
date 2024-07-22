import React, { useState } from "react";
import "../styles/ImageGrid.css";

const images = [
  "/pics/compressed/bluePink.jpg",
  "/pics/compressed/fullband.JPG",
  "/pics/compressed/greenblue.jpg",
  "/pics/compressed/drewnajbc.JPG",
  "/pics/compressed/drewdeepE.jpg",
  "/pics/compressed/colgreenbc.JPEG",
  "/pics/compressed/deepellum.jpeg",
  "/pics/compressed/drewbcport.JPG",
  "/pics/compressed/aj-opolis.jpg",
];

const ImageGrid = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = (e) => {
    if (
      e.target.classList.contains("image-grid-modal") ||
      e.target.classList.contains("image-grid-close")
    ) {
      setModalImage(null);
    }
  };

  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <div className="image-grid-card" key={index}>
          <img
            src={src}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(src)}
          />
        </div>
      ))}

      {modalImage && (
        <div className="image-grid-modal" onClick={closeModal}>
          <span
            className="image-grid-close"
            onClick={() => setModalImage(null)}
          >
            &times;
          </span>
          <img
            className="image-grid-modal-content"
            src={modalImage}
            alt="Fullscreen"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
