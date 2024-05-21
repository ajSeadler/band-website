import React, { useState, useEffect } from "react";
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogContent,
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
  width: '100%',
}));

const ShowsContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  padding: 0,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: '0 10px',
  },
}));

const ShowCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#89909F",
  color: "white",
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
  alignItems: "flex-start",
  padding: "10px",
}));

const ShowImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "0px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  objectFit: "cover",
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
    }, 1000); // Adjust the time as needed

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
              <h2 style={{ color: 'white', textAlign: 'center', margin: '20px 0', fontSize:'2.5rem' }}>
                UPCOMING SHOWS
              </h2>
            </div>
            <ShowsContainer container spacing={2}>
              {shows.map((show, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <ShowCard onClick={() => handleCardClick(show)}>
                    <ShowImage src={show.image} alt={`Band Picture ${index}`} />
                    <ShowCardContent>
                      <Typography variant="h6" style={{ fontSize: '1rem', textDecoration: 'underline' }}>{show.title}</Typography>
                      <Typography variant="body2">
                        <EventIcon fontSize="small" /> {show.date}
                      </Typography>
                      <Typography variant="body2">
                        <ScheduleIcon fontSize="small" /> {show.time}
                      </Typography>
                      <Typography variant="body2">
                        <MonetizationOnIcon fontSize="small" /> {show.price}
                      </Typography>
                      <Typography variant="body2">
                        <LocationOnIcon fontSize="small" /> {show.location}
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
