// Video.js

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "../styles/Media.css";

const Video = ({ src, title }) => {
  return (
    <Card className="video-card">
      <div className="video-wrapper">
        <iframe
          title={title}
          src={src}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <CardContent>
        <Typography variant="body1" className="video-title">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Video;
