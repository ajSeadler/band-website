// Media.js

import React from "react";
import Video from "./Video";
import "../styles/Media.css";

const Media = () => {
  return (
    <div className="video-container">
      {/* First Video */}
      <Video
        src="https://www.youtube.com/embed/Imyu7VLuy98"
        title="Disco Stranger - LIVE @ Speakeasy / Special Jam"
      />

      {/* Second Video */}
      <Video
        src="https://www.youtube.com/embed/SOe3YmCJxy0"
        title="Disco Stranger - The Less I Think (Lyric video)"
      />

      {/* Third Video */}
      <Video
        src="https://www.youtube.com/embed/abJ0IQIawzo"
        title="Disco Stranger - Evil, In a Sense (Music Video)"
      />
    </div>
  );
};

export default Media;
