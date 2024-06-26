// UpcomingShows.jsx

import React, { useState, useEffect } from "react";
import { Paper, Typography, Card, CardContent } from "@mui/material";
import Slider from "react-slick";
import { shows } from "./showinfo";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import "../styles/UpcomingShows.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const renderSkeletons = (count) => {
  const skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <div key={i} className="show-slide">
        <Card className="show-card-up">
          <div className="show-image-up skeleton"></div>
          <CardContent className="show-card-content">
            <div className="skeleton-text skeleton"></div>
            <div className="skeleton-text skeleton"></div>
            <div className="skeleton-text skeleton"></div>
            <div className="skeleton-text skeleton"></div>
            <div className="location-and-button">
              <div className="skeleton-text skeleton"></div>
              <div className="oval-button skeleton"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  return skeletons;
};

const UpcomingShows = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="upcoming-shows">
      {loading ? (
        <Paper elevation={0} className="upcoming-shows">
          <div className="swipe-indicator"></div>
          <Slider {...sliderSettings} className="shows-slider">
            {renderSkeletons(3)}
          </Slider>
        </Paper>
      ) : (
        <Paper elevation={0} className="upcoming-shows">
          <div className="swipe-indicator"></div>
          <Slider {...sliderSettings} className="shows-slider">
            {shows.map((show) => (
              <div key={show.id} className="show-slide">
                <Card className="show-card-up">
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
                      <MonetizationOnIcon
                        sx={{ color: "#1ed760", marginRight: 1 }}
                      />{" "}
                      {show.price}
                    </Typography>
                    <div className="location-and-button">
                      <Typography variant="body2" className="location-text">
                        <LocationOnIcon
                          sx={{ color: "#d34836", marginRight: 0 }}
                        />{" "}
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
              </div>
            ))}
          </Slider>
        </Paper>
      )}
    </div>
  );
};

export default UpcomingShows;
