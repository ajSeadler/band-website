import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
  Button,
  Skeleton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ClipLoader } from "react-spinners";
import Slider from "react-slick";
import { shows } from "./showinfo";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../styles/UpcomingShows.css"; // Import the CSS file

const sliderSettings = {
  dots: true,
  infinite: false,
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
          <Skeleton
            variant="rectangular"
            width="100%"
            height={150}
            className="show-image-up"
          />
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
    );
  }
  return skeletons;
};

const UpcomingShows = () => {
  const [open, setOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
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
          <Paper elevation={0} className="upcoming-shows">
            <div className="swipe-indicator"></div>
            <Slider {...sliderSettings} className="shows-slider">
              {renderSkeletons(3)}
            </Slider>
          </Paper>
        )}
        {!loading && (
          <Paper elevation={0} className="upcoming-shows">
            <div className="swipe-indicator"></div>
            <Slider {...sliderSettings} className="shows-slider">
              {shows.map((show, index) => (
                <div key={index} className="show-slide">
                  <Card className="show-card-up">
                    <img
                      src={show.image}
                      alt={`Band Picture ${index}`}
                      className="show-image-up"
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
                      <div className="location-and-button">
                        <Typography variant="body2" className="location-text">
                          <LocationOnIcon
                            sx={{ color: "#d34836", marginRight: 0 }}
                          />{" "}
                          {show.location}
                        </Typography>
                        <Button
                          className="oval-button"
                          onClick={() => handleCardClick(show)}
                        >
                          See Details
                        </Button>
                      </div>
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
            {selectedShow && (
              <Card className="show-card-modal">
                <img
                  src={selectedShow.image}
                  alt={`Band Picture`}
                  className="show-image-modal"
                />
                <CardContent className="show-card-content">
                  <h6 className="show-title">{selectedShow.title}</h6>
                  {selectedShow.description && (
                    <Typography
                      variant="body2"
                      style={{ marginBottom: "10px", fontSize: "1rem" }}
                      className="show-description"
                    >
                      {" "}
                      <span
                        style={{
                          color: "salmon",
                          textDecoration: "underline",
                          margin: "0px",
                        }}
                      >
                        FEATURING:{" "}
                      </span>
                      {selectedShow.description}
                    </Typography>
                  )}
                  <Typography>
                    <EventIcon sx={{ color: "#ffbd01", marginRight: 1 }} />{" "}
                    {selectedShow.date}
                  </Typography>
                  <Typography>
                    <ScheduleIcon sx={{ color: "#4a90e2", marginRight: 1 }} />{" "}
                    {selectedShow.time}
                  </Typography>
                  {selectedShow.price && (
                    <Typography>
                      <MonetizationOnIcon
                        sx={{ color: "#1ed760", marginRight: 1 }}
                      />{" "}
                      {selectedShow.price}
                    </Typography>
                  )}
                  <Typography variant="body2">
                    <LocationOnIcon sx={{ color: "#d34836", marginRight: 1 }} />{" "}
                    {selectedShow.location}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default UpcomingShows;
