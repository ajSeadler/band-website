// Playlists.jsx
import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/ShowDetailsPage.css"; // Assuming the styles are defined here

const members = [
  {
    name: "NATHANIEL",
    image: "/pics/compressed/Nat.jpg",
    bio: "Nathaniel is the rhythmic backbone of the band, bringing complex beats and innovative rhythms to the forefront. Known for his improvisational skills, he drives the band’s energetic live performances and is always exploring new percussive textures.",
    instrument: "Drums",
    upcomingProjects:
      "Working on a groundbreaking solo project set to release next year, which will redefine his artistic expression.",
    inspirations:
      "Inspired by a diverse range of musical genres, from jazz to electronica, infusing his work with a unique blend of styles.",
  },
  {
    name: "DREW",
    image: "/pics/compressed/drewhead.jpg",
    bio: "Drew's haunting vocals and intricate guitar work are at the heart of the band’s sound. His ability to weave melodies into hypnotic jams captivates audiences, and his fearless approach to songwriting challenges the boundaries of psych rock.",
    instrument: "Guitar and Lead Vocals",
    upcomingProjects:
      "Developing a new line of guitars designed for the modern musician.",
    inspirations:
      "Heavily inspired by funk and soul, which heavily influence his playing style.",
  },
  {
    name: "AJ",
    image: "/pics/compressed/aj.jpg",
    bio: "AJ is the band’s sonic explorer, using his lead guitar to push the boundaries of sound. His solos are a journey into the unknown, blending experimental effects with classic rock influences, creating an unforgettable experience.",
    instrument: "Lead Guitar",
    upcomingProjects:
      "Releasing an instructional guitar video series aimed at beginners.",
    inspirations:
      "Deeply influenced by the great guitarists of rock and roll history.",
  },
  {
    name: "COLTON",
    image: "/pics/compressed/col.jpg",
    bio: "Colton lays down the groove with his bass, providing the foundation for the band’s extended jams. His ability to meld genres into fluid, bass-driven soundscapes adds depth to the band’s performances and elevates their collective sound.",
    instrument: "Bass",
    upcomingProjects:
      "Recording a solo album that explores new bass techniques.",
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
