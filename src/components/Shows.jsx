import React, { useEffect } from "react";
import {
  Typography,
  Button,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
import { shows, pastShows } from "./showinfo";
import "../styles/Shows.css";

const Shows = () => {
  const navigate = useNavigate();

  const handleCardClick = (showId) => {
    navigate(`/showdetails/${showId}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.parallax-section');
      const isMobile = window.innerWidth <= 768; // Check if the screen width is 768px or less

      if (!isMobile) { // Only apply parallax effect on larger screens
        sections.forEach(section => {
          const scrollPosition = window.scrollY;
          const sectionOffset = section.offsetTop;

          // Calculate the background position based on scroll
          const backgroundPositionY = (scrollPosition - sectionOffset) * 0.5; // Adjust the speed
          section.style.backgroundPositionY = `${backgroundPositionY}px`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderShowSection = (show, index) => (
    <div
      key={index}
      className="parallax-section"
      style={{ backgroundImage: `url(${show.image})` }}
    >
      <div className="show-info-container">
        <Typography variant="h2" className="show-title">
          {show.title}
        </Typography>
        <Typography className="show-info">
          <EventIcon sx={{ color: "#ffbd01", marginRight: 1 }} /> {show.date}
        </Typography>
        <Typography className="show-info">
          <ScheduleIcon sx={{ color: "#4a90e2", marginRight: 1 }} /> {show.time}
        </Typography>
        <Typography className="show-info">
          <MonetizationOnIcon sx={{ color: "#1ed760", marginRight: 1 }} /> {show.price}
        </Typography>
        <Typography className="show-info">
          <LocationOnIcon sx={{ color: "#d34836", marginRight: 1 }} /> {show.location}
        </Typography>
      </div>
    </div>
  );

  return (
    <div className="parallax-shows-container">
      {shows.map((show, index) => renderShowSection(show, index))}

      <div className="custom-font-shows">
        <h1 style={{ marginTop: "10%", color: '#fff', textAlign: 'center' }}>PAST SHOWS</h1>
      </div>

      {pastShows.map((show, index) => renderShowSection(show, index))}
    </div>
  );
};

export default Shows;
