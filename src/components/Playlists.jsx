// Playlists.jsx
import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import "../styles/ShowDetailsPage.css"; // Assuming the styles are defined here

const Playlists = () => {
  const members = [
    { name: "Nathaniel", image: "/pics/compressed/Nat.jpg" },
    { name: "Drew", image: "/pics/compressed/drewhead.jpg" },
    { name: "AJ", image: "/pics/compressed/aj.jpg" },
    { name: "Colton", image: "/pics/compressed/col.jpg" },
  ];

  return (
    <div className="additional-container">
      <Typography variant="h4" className="additional-title">
        What Are We Listening To?
      </Typography>
      <Card className="additional-card">
        <CardContent className="additional-card-content">
          <Typography variant="h6">
            Click on a member to view their Spotify account!
          </Typography>
          <div className="member-images-container">
            {members.map((member, index) => (
              <div key={index} className="member-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
                <Typography variant="body2" className="member-name">
                  {member.name}
                </Typography>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Playlists;
