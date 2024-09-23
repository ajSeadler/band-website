// Media.jsx
import React from "react";
import Video from "./Video";
import "../styles/Media.css";

const Media = () => {
  const videos = [
    {
      src: "https://www.youtube.com/embed/Imyu7VLuy98",
      title: "Disco Stranger - LIVE @ Speakeasy / Special Jam",
    },
    // Add more videos here as needed
  ];

  return (
    <div className="media-container">
      {videos.map((video, index) => (
        <Video key={index} src={video.src} title={video.title} />
      ))}
    </div>
  );
};

export default Media;
