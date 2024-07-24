// MemberDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";
import "../styles/ShowDetailsPage.css"; // Assuming the styles are defined here

const members = [
  {
    name: "nathaniel",
    image: "/pics/compressed/Nat.jpg",
    bio: "Nathaniel is a passionate musician who loves exploring new sounds. He is always looking for the next big thing in music and enjoys collaborating with other artists.",
    instrument: "Guitar",

    upcomingProjects:
      "Working on a groundbreaking solo project set to release next year, which will redefine their artistic expression.",
    inspirations:
      "Inspired by a diverse range of musical genres, from jazz to electronica, infusing their work with a unique blend of styles.",
  },
  {
    name: "drew",
    image: "/pics/compressed/drewhead.jpg",
    bio: "Drew is a versatile artist with a knack for creating unique melodies. His creative approach to music has won him accolades and a loyal fanbase.",
    instrument: "Bass",
    upcomingProjects:
      "Developing a new line of bass guitars designed for the modern musician.",
    inspirations:
      "Heavily inspired by funk and soul, which heavily influence his playing style.",
  },
  {
    name: "aj",
    image: "/pics/compressed/aj.jpg",
    bio: "AJ brings energy and rhythm to the band with his percussive skills. He is the heartbeat of the band and his dynamic drumming style keeps the band grooving.",
    instrument: "Drums",

    upcomingProjects:
      "Releasing an instructional drumming video series aimed at beginners.",
    inspirations:
      "Deeply influenced by the great drummers of rock and roll history.",
  },
  {
    name: "colton",
    image: "/pics/compressed/col.jpg",
    bio: "Colton is known for his soulful performances and dynamic range. His powerful vocals and emotive performances captivate audiences everywhere.",
    instrument: "Vocals",

    upcomingProjects:
      "Recording a solo album that explores new vocal techniques.",
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
          <Typography variant="body1" className="member-details-bio">
            {member.bio}
          </Typography>
          <Typography variant="body2" className="member-details-instrument">
            Instrument: {member.instrument}
          </Typography>
        </CardContent>
      </Card>

      {/* Member-specific grid content */}
      <div className="member-details-grid">
        {/* <div className="grid-item">
          <Typography variant="h6" className="grid-title">
            Recent Collaborations
          </Typography>
          <Typography variant="body2" className="grid-content">
            {member.recentCollaborations}
          </Typography>
        </div> */}
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
        {/* <div className="grid-item">
          <Typography variant="h6" className="grid-title">
            Career Highlights
          </Typography>
          <Typography variant="body2" className="grid-content">
            {member.careerHighlights}
          </Typography>
        </div> */}
      </div>
    </div>
  );
};

export default MemberDetails;
