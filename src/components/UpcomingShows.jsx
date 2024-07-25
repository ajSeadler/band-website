// UpcomingShows.jsx
import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { shows } from "./showinfo";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import "../styles/UpcomingShows.css";

const UpcomingShows = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="show-card-up skeleton"></div>
        ))}
      </>
    );
  }

  return (
    <>
      {shows.map((show) => (
        <Card key={show.id} className="show-card-up">
          <img
            src={show.image}
            alt={`Band Picture ${show.id}`}
            className="show-image-up"
          />
          <CardContent className="show-card-content">
            <h6 className="show-title">{show.title}</h6>
            <Typography>
              <EventIcon sx={{ color: "#ffbd01", marginRight: 1 }} />{" "}
              {show.date}
            </Typography>
            <Typography>
              <ScheduleIcon sx={{ color: "#4a90e2", marginRight: 1 }} />{" "}
              {show.time}
            </Typography>
            <Typography>
              <MonetizationOnIcon sx={{ color: "#1ed760", marginRight: 1 }} />{" "}
              {show.price}
            </Typography>
            <div className="location-and-button">
              <Typography variant="body2" className="location-text">
                <LocationOnIcon sx={{ color: "#d34836", marginRight: 0 }} />{" "}
                {show.location}
              </Typography>
              <Link
                className="oval-button"
                to={`/showdetails/${show.id}`}
                style={{ textDecoration: "NONE" }}
              >
                SEE DETAILS
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default UpcomingShows;
