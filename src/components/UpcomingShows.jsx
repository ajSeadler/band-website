import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ClipLoader } from "react-spinners";
import Slider from "react-slick";
import { shows } from "./showinfo";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link as RouterLink } from "react-router-dom";
import "../styles/UpcomingShows.css"; // Import the CSS file

const sliderSettings = {
  dots: true,
  infinite: false,
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

const UpcomingShows = () => {
  const [open, setOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    });
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (show) => {
    setSelectedShow(show);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="upcoming-shows">
        {loading && (
          <div className="loader-overlay">
            <ClipLoader color="#36D7B7" loading={loading} size={50} />
          </div>
        )}

        {!loading && (
          <Paper elevation={0} className="shows-pg">
            <Slider {...sliderSettings} className="shows-slider">
              {shows.map((show, index) => (
                <div key={index} className="show-slide">
                  <Card
                    className="show-card-up"
                    onClick={() => handleCardClick(show)}
                  >
                    <img
                      src={show.image}
                      alt={`Band Picture ${index}`}
                      className="show-image"
                    />
                    <CardContent className="show-card-content">
                      <h6 className="show-title">{show.title}</h6>
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
                          sx={{ color: "#d34836", marginRight: 1 }}
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

export default UpcomingShows;
