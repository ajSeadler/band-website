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
    {
      src: "https://www.youtube.com/embed/SOe3YmCJxy0",
      title: "Disco Stranger - The Less I Think (Lyric video)",
    },
    {
      src: "https://www.youtube.com/embed/abJ0IQIawzo",
      title: "Disco Stranger - Evil, In a Sense (Music Video)",
    },
  ];

  return (
    <>
      {videos.map((video, index) => (
        <Video key={index} src={video.src} title={video.title} />
      ))}
    </>
  );
};

export default Media;
