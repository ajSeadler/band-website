import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, CircularProgress } from "@mui/material";

const Video = ({ src, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card className="video-card" sx={{ boxShadow: 0, border: 0 }}>
      {isLoading && (
        <div style={{ position: "relative", width: "100%", height: "200px" }}>
          <CircularProgress
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
      <CardMedia
        component="iframe"
        height="200"
        src={src}
        title={title}
        onLoad={handleLoad}
        sx={{ boxShadow: "none", border: "none", display: isLoading ? "none" : "block" }}
      />
      <CardContent style={{ backgroundColor: 'transparent' }}>
        <Typography
          variant="body1"
          
          style={{ fontFamily: "YourCustomFont" }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Media = () => {
  return (
    <>

    <Typography
    variant="h4"
    gutterBottom
    style={{ color: "white", fontFamily: "Bebas Neue" }}
    className="video-sec-mobile"
  >
    Watch Our Latest Videos
  </Typography>

    <div className="video-home" style={{ border: "none", boxShadow: "none" }}>
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
    </>
  );
};

export default Media;
