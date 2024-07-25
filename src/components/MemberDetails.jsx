// MemberDetails.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";
import Playlists from "./Playlists";
import "../styles/ShowDetailsPage.css"; // Assuming the styles are defined here

const members = [
  {
    name: "NATHANIEL",
    image: "/pics/compressed/Nat.jpg",
    bio: "Nathaniel is the rhythmic backbone of the band. Known for his improvisational skills, he drives the band’s energetic live performances and is always exploring new percussive textures.",
    instrument: "Drums",
    upcomingProjects:
      "Working on a groundbreaking solo project set to release next year, which will redefine his artistic expression.",
    inspirations:
      "Inspired by a diverse range of musical genres, from jazz to electronica, infusing his work with a unique blend of styles.",
  },
  {
    name: "DREW",
    image: "/pics/compressed/drewhead.jpg",
    bio: "Drew's glass-like vocals and intricate guitar work are at the heart of the band’s sound. His ability to weave melodies into hypnotic jams captivates audiences, and his fearless approach to songwriting sets the tone of Disco Stranger.",
    instrument: "Guitar and Lead Vocals",
    upcomingProjects:
      "Developing a new line of guitars designed for the modern musician.",
    inspirations:
      "Heavily inspired by funk and soul, which heavily influence his playing style.",
  },
  {
    name: "AJ",
    image: "/pics/compressed/aj.jpg",
    bio: "AJ is the band’s sonic explorer, using his guitar to push the boundaries of sound. His solos are a journey into the unknown, blending experimental effects with classic rock influences.",
    instrument: "Lead Guitar",
    upcomingProjects:
      "Releasing an instructional guitar video series aimed at beginners.",
    inspirations:
      "Deeply influenced by the great guitarists of rock and roll history.",
  },
  {
    name: "COLTON",
    image: "/pics/compressed/col.jpg",
    bio: "Colton lays down the groove with his bass, providing the foundation for the band’s extended jams. His ability to meld genres into fluid, bass-driven soundscapes adds depth to the band’s performances and elevates their collective sound. Think Bob Ross but he plays bass guitar.",
    instrument: "Bass",
    upcomingProjects:
      "Recording a solo album that explores new bass techniques.",
    inspirations:
      "Inspired by classical opera and modern pop, creating a unique vocal style.",
  },
];

const MemberDetails = () => {
  const { name } = useParams();
  const member = members.find((m) => m.name === name);

  if (!member) {
    return <Typography variant="h6">Member not found</Typography>;
  }

  return (
    <div className="member-details-container">
      <Card className="member-details-card">
        <CardContent className="member-details-content">
          <img
            src={member.image}
            alt={member.name}
            className="member-details-image"
          />
          <Typography
            variant="h4"
            className="member-details-name"
            sx={{ fontFamily: "Bebas Neue" }}
          >
            {member.name.charAt(0).toUpperCase() + member.name.slice(1)}
          </Typography>
          <Typography variant="body2" className="member-details-instrument">
            Instrument: {member.instrument}
          </Typography>
          <Typography variant="body1" className="member-details-bio">
            {member.bio}
          </Typography>
        </CardContent>
      </Card>

      {/* Member-specific grid content */}
      {/* <div className="member-details-grid">
        <div className="grid-item">
          <Typography variant="h6" className="grid-title">
            Gear
          </Typography>
          <Typography variant="body2" className="grid-content">
            {member.upcomingProjects}
          </Typography>
        </div>
        <div className="grid-item">
          <Typography variant="h6" className="grid-title">
            Inspirations
          </Typography>
          <Typography variant="body2" className="grid-content">
            {member.inspirations}
          </Typography>
        </div>
      </div> */}
      <Link to={"/about"} style={{ textDecoration: "none" }}>
        <button
          className="back-button"
          style={{
            backgroundColor: "transparent",
            textDecoration: "underline",
            color: "salmon",
            border: "none",
            borderRadius: "none",
            margin: "auto",
            padding: "20px",
            cursor: "pointer",
          }}
        >
          <Typography variant="h6">Back</Typography>
        </button>
      </Link>
    </div>
  );
};

export default MemberDetails;
