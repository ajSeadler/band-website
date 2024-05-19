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
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { ClipLoader } from "react-spinners"; // Import the ClipLoader
import { shows } from "./showinfo"; // Import only the upcoming shows
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ShowsPaper = styled(Paper)(({ theme }) => ({
  padding: "10px",
  background: "#000",
  marginBottom: "2%",
}));

const ShowsContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
}));

const ShowCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#89909F",
  color: "white",
  maxHeight: "100%",
  height: "100%",
  overflow: "hidden",
  cursor: "pointer",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const ShowCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
}));

const ShowImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxHeight: "100%",
  borderRadius: "0px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  objectFit: "contain",
}));

const FullImageDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    overflow: "hidden",
  },
}));

const FullImageDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: 0,
  position: "relative",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

const UpcomingShows = () => {
  const [open, setOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulating loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0); // Adjust the time as needed

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to run only once when the component mounts

  const handleCardClick = (show) => {
    setSelectedShow(show);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="s">
        {/* Conditionally render the loader if loading is true */}
        {loading && (
          <div className="loader-overlay">
            <ClipLoader color="#36D7B7" loading={loading} size={50} />
          </div>
        )}

        {!loading && (
          <ShowsPaper elevation={0}>
            <div className="home-shows">
              <h2>UPCOMING SHOWS</h2>
            </div>
            <ShowsContainer container spacing={2}>
              {shows.map((show, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <ShowCard onClick={() => handleCardClick(show)}>
                    <ShowImage src={show.image} alt={`Band Picture ${index}`} />
                    <ShowCardContent>
                      <h6 style={{ fontSize: '1.3rem', textDecoration: 'underline' }}>{show.title}</h6>
                      <Typography>
                        <EventIcon /> {show.date}
                      </Typography>
                      <Typography>
                        <ScheduleIcon /> {show.time}
                      </Typography>
                      <Typography>
                        <MonetizationOnIcon /> {show.price}
                      </Typography>
                      <Typography>
                        <LocationOnIcon /> {show.location}
                      </Typography>
                    </ShowCardContent>
                  </ShowCard>
                </Grid>
              ))}
            </ShowsContainer>
          </ShowsPaper>
        )}

        <FullImageDialog open={open} onClose={handleClose}>
          <FullImageDialogContent>
            <CloseButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
            <ShowImage src={selectedShow?.image} alt={`Band Picture`} />
          </FullImageDialogContent>
        </FullImageDialog>
      </div>
    </>
  );
};

export default UpcomingShows;
