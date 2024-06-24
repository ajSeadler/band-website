import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ClipLoader } from "react-spinners";
import { shows, pastShows } from "./showinfo";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Shows.css";

const Shows = () => {
  const [open, setOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }); // Set a delay for the loading spinner

    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (show) => {
    setSelectedShow(show);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
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
          dots: false,
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
    <>
      <div className="shows-pg">
        {loading && (
          <div className="loader-overlay">
            <ClipLoader color="#36D7B7" loading={loading} size={50} />
          </div>
        )}

        {!loading && (
          <Paper elevation={0} className="shows-pg">
            {/* <div className="custom-font-shows">
              <h1>UPCOMING SHOWS</h1>
            </div> */}
            <Slider {...sliderSettings} className="shows-carousel">
              {shows.map((show, index) => (
                <div key={index}>
                  <Card
                    className="show-card"
                    onClick={() => handleCardClick(show)}
                  >
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
                        {show.date}
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
                      <Typography variant="body2">
                        <LocationOnIcon
                          sx={{
                            color: "#d34836",
                            fontSize: "small",
                            marginRight: 1,
                          }}
                        />{" "}
                        {show.location}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>

            <div className="custom-font-shows">
              <h1 style={{ marginTop: "10%" }}>PAST SHOWS</h1>
            </div>

            <Slider {...sliderSettings} className="shows-carousel">
              {pastShows.map((show, index) => (
                <div key={index}>
                  <Card
                    className="show-card"
                    onClick={() => handleCardClick(show)}
                  >
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
                      <Typography>
                        <MonetizationOnIcon
                          sx={{ color: "#1ed760", marginRight: 1 }}
                        />{" "}
                        {show.price}
                      </Typography>
                      <Typography variant="body2">
                        <LocationOnIcon
                          sx={{
                            color: "#d34836",
                            fontSize: "small",
                            marginRight: 1,
                          }}
                        />{" "}
                        {show.location}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          </Paper>
        )}

        <Dialog open={open} onClose={handleClose} className="full-image-dialog">
          <DialogContent className="full-image-dialog-content">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              className="close-button"
            >
              <CloseIcon />
            </IconButton>
            <img
              src={selectedShow?.image}
              alt={`Band Picture`}
              className="show-image"
            />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Shows;
