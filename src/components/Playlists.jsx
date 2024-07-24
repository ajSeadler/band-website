// Playlists.jsx
import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
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

const Playlists = () => {
  return (
    <div className="additional-container">
      <Typography variant="h4" className="additional-title">
        Who Is Disco Stranger?
      </Typography>
      <Card className="additional-card">
        <CardContent className="additional-card-content">
          <Typography variant="h6">Click on a member for more info</Typography>
          <div className="member-images-container">
            {members.map((member, index) => (
              <Link
                to={`/member/${member.name}`}
                key={index}
                className="member-image-wrapper"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
                <Typography variant="body2" className="member-name">
                  {member.name.charAt(0).toUpperCase() + member.name.slice(1)}
                </Typography>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Playlists;
