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
import { shows, pastShows } from "./showinfo";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ShowsPaper = styled(Paper)(({ theme }) => ({
  padding: "50px",
  background: "#000",
  marginTop: "-5%",
  [theme.breakpoints.down("sm")]: {
    marginTop: "-15%", // Margin for mobile screens
  },
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
    // maxWidth: '50%',
    // width: '80%',
    // maxHeight: '50%',
    // height: '80%',
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

const showsPerPage = 4;

const Shows = () => {
  const [open, setOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
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
    <div className="shows-pg">
      {/* Conditionally render the loader if loading is true */}
      {loading && (
        <div className="loader-overlay">
          <ClipLoader color="#36D7B7" loading={loading} size={50} />
        </div>
      )}

      {!loading && (
        <ShowsPaper elevation={0}>
          {/* <div className="custom-font-shows">
          </div> */}
          <div className="custom-font-shows">
            <h1>UPCOMING SHOWS</h1>
          </div>
          <ShowsContainer container spacing={4} style={{ marginBottom: "3%" }}>
            {shows.map((show, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ShowCard onClick={() => handleCardClick(show)}>
                  <ShowImage src={show.image} alt={`Band Picture ${index}`} />
                  <ShowCardContent>
                    <h6 style={{fontSize:'1.3rem', textDecoration:'underline'}}>{show.title}</h6>
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

          <div className="custom-font-shows">
            <h1>PAST SHOWS</h1>
          </div>

          {/* Anchor point for top of past shows section */}
          <div id="pastShows" />

          <ShowsContainer container spacing={4}>
            {currentShows.map((show, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ShowCard onClick={() => handleCardClick(show)}>
                  <ShowImage src={show.image} alt={`Band Picture ${index}`} />
                  <ShowCardContent>
                  <h6 style={{fontSize:'1.3rem', textDecoration:'underline'}}>{show.title}</h6>
                    <Typography>
                      <EventIcon /> {show.date}
                    </Typography>
                    <Typography>
                      <ScheduleIcon /> {show.time}
                    </Typography>
                    <Typography>
                      <MonetizationOnIcon /> {show.price}
                    </Typography>
                    {/* <Typography>
                      <LocationOnIcon /> {show.location}
                    </Typography> */}
                  </ShowCardContent>
                </ShowCard>
              </Grid>
            ))}
          </ShowsContainer>

          {/* Pagination */}
          <Grid container justifyContent="center" style={{ marginTop: "20px" }}>
            {[...Array(Math.ceil(pastShows.length / showsPerPage)).keys()].map(
              (pageNumber) => (
                <Button
                  key={pageNumber + 1}
                  onClick={() => paginate(pageNumber + 1)}
                  style={{ color: "#dfd" }}
                >
                  {pageNumber + 1}
                </Button>
              )
            )}
          </Grid>
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
  );
};

export default Shows;
