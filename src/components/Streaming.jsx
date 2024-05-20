// Streaming.jsx
import React from "react";

const Streaming = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
      {/* Spotify iframe */}
      <iframe
        style={{ borderRadius: "0px", marginBottom: "10px", margin: "5px" }}
        src="https://open.spotify.com/embed/artist/3SwSE7OtWzLOrc32Eq54gO?utm_source=generator&theme=0"
        width="98%"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Streaming;
