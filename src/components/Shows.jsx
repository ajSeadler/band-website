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
import "../styles/Shows.css";

const showsPerPage = 4;

const Shows = () => {
  const [open, setOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
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

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = pastShows.slice(indexOfFirstShow, indexOfLastShow);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const pastShowsAnchor = document.getElementById("pastShows");
    if (pastShowsAnchor) {
      const topOffset = pastShowsAnchor.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
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
            <div className="custom-font-shows">
              <h1>UPCOMING SHOWS</h1>
            </div>
            <Grid
              container
              spacing={4}
              className="shows-container"
              style={{ marginBottom: "3%" }}
            >
              {shows.map((show, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                </Grid>
              ))}
            </Grid>

            <div className="custom-font-shows">
              <h1>PAST SHOWS</h1>
            </div>

            <div id="pastShows" className="past-shows-anchor" />

            <Grid container spacing={4} className="shows-container">
              {currentShows.map((show, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                </Grid>
              ))}
            </Grid>

            <Grid
              container
              justifyContent="center"
              className="pagination-buttons"
            >
              {[
                ...Array(Math.ceil(pastShows.length / showsPerPage)).keys(),
              ].map((pageNumber) => (
                <Button
                  key={pageNumber + 1}
                  onClick={() => paginate(pageNumber + 1)}
                  sx={{
                    color: "#1db954",
                    backgroundColor: "#121212",
                    border: "none",
                    padding: "10px 20px",
                    margin: "0 5px",
                    borderRadius: "50px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#1db954",
                      color: "white",
                    },
                  }}
                >
                  {pageNumber + 1}
                </Button>
              ))}
            </Grid>
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
