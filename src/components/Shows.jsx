import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Card,
  CardContent,
  Button,
  Skeleton,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "../styles/Shows.css";

import { shows, pastShows } from "./showinfo";

const Shows = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (showId) => {
    navigate(`/showdetails/${showId}`);
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  return (
    <div className="shows-pg">
      <Paper elevation={0} className="shows-pg">
        <Slider {...sliderSettings} className="shows-carousel">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <Card className="show-card">
                    <Skeleton variant="rectangular" width="100%" height={200} />
                    <CardContent className="show-card-content">
                      <Skeleton
                        width="60%"
                        height={30}
                        style={{ backgroundColor: "#EF5D60" }}
                      />
                      <Skeleton
                        width="40%"
                        height={20}
                        style={{ backgroundColor: "#EF5D60" }}
                      />
                      <Skeleton
                        width="40%"
                        height={20}
                        style={{ backgroundColor: "#EF5D60" }}
                      />
                      <Skeleton
                        width="40%"
                        height={20}
                        style={{ backgroundColor: "#EF5D60" }}
                      />
                      <div className="location-and-button">
                        <Skeleton variant="text" width="70%" />
                        <Skeleton
                          variant="rectangular"
                          width="30%"
                          height={30}
                          className="oval-button"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            : shows.map((show, index) => (
                <div key={index}>
                  <Card className="show-card">
                    <img
                      src={show.image}
                      alt={`Band Picture ${index}`}
                      className="show-image"
                    />
                    <CardContent className="show-card-content">
                      <h6
                        style={{
                          fontSize: "1.3rem",
                          textDecoration: "underline",
                        }}
                      >
                        {show.title}
                      </h6>
                      <Typography>
                        <EventIcon sx={{ color: "#ffbd01", marginRight: 1 }} />{" "}
                        {show.date2}
                      </Typography>
                      <Typography>
                        <ScheduleIcon
                          sx={{ color: "#4a90e2", marginRight: 1 }}
                        />{" "}
                        {show.time}
                      </Typography>
                      <Typography>
                        <MonetizationOnIcon
                          sx={{ color: "#1ed760", marginRight: 1 }}
                        />{" "}
                        {show.price}
                      </Typography>
                      <div className="location-and-button">
                        <Typography variant="body2">
                          <LocationOnIcon
                            sx={{
                              color: "#d34836",
                              marginRight: 1,
                            }}
                          />{" "}
                          {show.location}
                        </Typography>
                        <Button
                          className="oval-button"
                          onClick={() => handleCardClick(show.id)}
                        >
                          See Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
        </Slider>

        <div className="custom-font-shows">
          <h1 style={{ marginTop: "10%" }}>PAST SHOWS</h1>
        </div>
        <Slider {...sliderSettings} className="shows-carousel">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <Card className="show-card">
                    <Skeleton variant="rectangular" width="100%" height={200} />
                    <CardContent className="show-card-content">
                      <Skeleton
                        width="60%"
                        height={30}
                        style={{ backgroundColor: "#EF5D60" }}
                      />
                      <Skeleton
                        width="40%"
                        height={20}
                        style={{ backgroundColor: "#EF5D60" }}
                      />
                      <Skeleton
                        width="40%"
                        height={20}
                        style={{ backgroundColor: "#EF5D60" }}
                      />
                      <Skeleton
                        width="40%"
                        height={20}
                        style={{ backgroundColor: "#EF5D60" }}
                      />
                      <div className="location-and-button">
                        <Skeleton
                          variant="circular"
                          width={100}
                          height={30}
                          className="oval-button"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            : pastShows.map((show, index) => (
                <div key={index}>
                  <Card className="show-card">
                    <img
                      src={show.image}
                      alt={`Band Picture ${index}`}
                      className="show-image-past"
                    />
                    <CardContent className="show-card-content">
                      <h6
                        style={{
                          fontSize: "1.3rem",
                          textDecoration: "underline",
                        }}
                      >
                        {show.title}
                      </h6>
                      <Typography>
                        <EventIcon sx={{ color: "#ffbd01", marginRight: 1 }} />{" "}
                        {show.date}
                      </Typography>
                      <Typography>
                        <ScheduleIcon
                          sx={{ color: "#4a90e2", marginRight: 1 }}
                        />{" "}
                        {show.time}
                      </Typography>
                      {show.price && (
                        <Typography>
                          <MonetizationOnIcon
                            sx={{ color: "#1ed760", marginRight: 1 }}
                          />{" "}
                          {show.price}
                        </Typography>
                      )}
                      <div className="location-and-button">
                        <Typography variant="body2">
                          <LocationOnIcon
                            sx={{
                              color: "#d34836",
                              marginRight: 1,
                            }}
                          />{" "}
                          {show.location}
                        </Typography>
                        {/* <Button
                          className="oval-button"
                          onClick={() => handleCardClick(show.id)}
                        >
                          See Details
                        </Button> */}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
        </Slider>
      </Paper>
    </div>
  );
};

export default Shows;
