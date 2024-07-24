// About.jsx
import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import Playlists from "./Playlists"; // Importing the existing Playlists component
import "../styles/AboutPage.css"; // CSS for the About page styling

const AboutPage = () => {
  return (
    <div className="about-container">
      <div style={{ marginBottom: "2%" }}>
        <Playlists />{" "}
      </div>
      <Card className="about-card">
        <CardContent>
          <Typography variant="h4" className="about-subtitle">
            Biography
          </Typography>
          <Typography variant="body1" className="about-text">
            Disco Stranger is a 4 piece jam band blended with a touch of
            indie/alt rock. The band resides in Oklahoma City, where they are no
            stranger to the local live music scene. In 2022, the band released
            their 6 track sefl-titled EP, recorded at Blackwatch Studios in
            Norman, Oklahoma. <br></br>
            <br></br> We never really know what else to say for these things,
            but when words fail, music speaks. Or whatever that book is called.
            Anyway, check out Disco Stranger on all streaming platforms. Better
            yet, come to a show and buy some merch!
          </Typography>
        </CardContent>
      </Card>

      <Card className="about-card">
        <CardContent>
          <Typography variant="h4" className="about-subtitle">
            Our Mission
          </Typography>
          <Typography variant="body1" className="about-text">
            Our mission is to inspire and connect people through the universal
            language of music. We aim to push boundaries and redefine genres,
            creating a unique sound that resonates with our listeners.
          </Typography>
        </CardContent>
      </Card>

      <Card className="about-card">
        <CardContent>
          <Typography variant="h4" className="about-subtitle">
            Our History
          </Typography>
          <Typography variant="body1" className="about-text">
            Over the years, we've performed at numerous venues and festivals,
            each experience adding to our growth and understanding of music. Our
            dedication has earned us a loyal fanbase and critical acclaim in the
            music industry.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
