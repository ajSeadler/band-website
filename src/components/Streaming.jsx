import React from "react";
import "../styles/Streaming.css"; // Import the CSS file

const Streaming = () => {
  return (
    <div className="streaming-container">
      <iframe
        className="styled-iframe"
        src="https://open.spotify.com/embed/artist/3SwSE7OtWzLOrc32Eq54gO?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Streaming;
