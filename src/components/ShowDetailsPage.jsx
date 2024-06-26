import React from "react";
import { Typography, Card, CardContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams } from "react-router-dom";
import { shows } from "./showinfo";
import "../styles/ShowDetailsPage.css";

const ShowDetailsPage = ({ onClose }) => {
  const { id } = useParams();

  const show = shows.find((show) => show.id === parseInt(id));

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-details-container">
      <IconButton
        aria-label="close"
        onClick={onClose}
        className="show-details-close-button"
      >
        <CloseIcon />
      </IconButton>
      <Card className="show-details-card">
        <CardContent className="show-details-card-content">
          <Typography variant="h4" className="show-details-title">
            {show.title}
          </Typography>
          <Typography variant="body1" className="show-details-description">
            {" "}
            <span
              style={{
                color: "salmon",
                textDecoration: "underline",
                margin: "5px",
              }}
            >
              FEATURING:
            </span>
            {show.description}
          </Typography>
          <Typography>
            <EventIcon
              className="show-details-icon"
              sx={{ color: "#ffbd01" }}
            />{" "}
            {show.date}
          </Typography>
          <Typography>
            <ScheduleIcon
              className="show-details-icon"
              sx={{ color: "#4a90e2" }}
            />{" "}
            {show.time}
          </Typography>
          <Typography>
            <MonetizationOnIcon
              className="show-details-icon"
              sx={{ color: "#1ed760" }}
            />{" "}
            {show.price}
          </Typography>
          <div className="location-and-button">
            <Typography variant="body2" className="location-text">
              <LocationOnIcon
                className="show-details-icon"
                sx={{ color: "#d34836" }}
              />{" "}
              {show.location}
            </Typography>
          </div>
          {show.bio && (
            <Typography variant="body1" className="show-details-bio">
              {show.bio}
            </Typography>
          )}
        </CardContent>
        <img src={show.image} alt={show.title} className="show-details-image" />
      </Card>
    </div>
  );
};

export default ShowDetailsPage;
