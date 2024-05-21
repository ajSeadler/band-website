import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, CircularProgress } from "@mui/material";

const Video = ({ src, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Card className="video-card" sx={{ boxShadow: 0, border: 0, backgroundColor:'transparent' }}>
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
      <CardContent style={{  color:'#fff' }}>
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

    <h2
    style={{ color: "white", fontFamily: "Gasoek One", fontSize:'2.5rem', textAlign:'center', margin:'5%' }}
    className="home-shows"
  >
    WATCH OUR LATEST VIDEOS
  </h2>

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
