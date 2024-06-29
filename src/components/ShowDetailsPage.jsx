import React from "react";
import { Typography, Card, CardContent, Grid, Button } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams, Link } from "react-router-dom";
import { shows } from "./showinfo";
import DiscoBall from "./DiscoBall";
import "../styles/ShowDetailsPage.css";

const ShowDetailsPage = () => {
  const { id } = useParams();
  const show = shows.find((show) => show.id === parseInt(id));
  const upcomingShows = shows.filter((s) => s.id !== parseInt(id));

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div className="show-details-container">
      <div className="show-details-row">
        <div className="show-details-info">
          <Card className="show-details-card">
            <CardContent className="show-details-card-content">
              <div className="title-and-disco">
                <Typography variant="h4" className="show-details-title">
                  {show.title}
                </Typography>
                <DiscoBall />
              </div>
              <Typography variant="body1" className="show-details-description">
                <span
                  style={{
                    color: "salmon",
                    textDecoration: "underline",
                  }}
                >
                  FEATURING:
                </span>
                {show.description}
              </Typography>
              <Typography>
                <EventIcon
                  className="show-details-icon"
                  sx={{ color: "#ffbd01" }}
                />{" "}
                {show.date}
              </Typography>
              <Typography>
                <ScheduleIcon
                  className="show-details-icon"
                  sx={{ color: "#4a90e2" }}
                />{" "}
                {show.time}
              </Typography>
              <Typography>
                <MonetizationOnIcon
                  className="show-details-icon"
                  sx={{ color: "#1ed760" }}
                />{" "}
                {show.price}
              </Typography>
              <div className="location-and-button">
                <Typography variant="body2" className="location-text">
                  <LocationOnIcon
                    className="show-details-icon"
                    sx={{ color: "#d34836" }}
                  />{" "}
                  {show.location}
                </Typography>
              </div>
              {show.bio && (
                <Typography variant="body1" className="show-details-bio">
                  {show.bio}
                </Typography>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="show-details-image-container">
          <Card className="show-details-card">
            <img
              src={show.image}
              alt={show.title}
              className="show-details-image"
            />
          </Card>
        </div>
      </div>
      <div className="upcoming-events-section">
        <Typography variant="h5" className="upcoming-events-title">
          Upcoming Shows
        </Typography>
        <Grid container spacing={3}>
          {upcomingShows.map((upcomingShow) => (
            <Grid item xs={12} sm={6} md={4} key={upcomingShow.id}>
              <Card className="upcoming-event-card">
                <img
                  src={upcomingShow.image}
                  alt={upcomingShow.title}
                  className="upcoming-event-image"
                />
                <CardContent className="upcoming-event-content">
                  <Typography variant="h6" className="upcoming-event-title">
                    {upcomingShow.title}
                  </Typography>
                  <Typography variant="body2" className="upcoming-event-date">
                    <EventIcon
                      className="upcoming-event-icon"
                      sx={{ color: "#ffbd01" }}
                    />{" "}
                    {upcomingShow.date}
                  </Typography>
                  <Typography>
                    <ScheduleIcon
                      className="upcoming-event-icon"
                      sx={{ color: "#4a90e2" }}
                    />{" "}
                    {upcomingShow.time}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="upcoming-event-location"
                  >
                    <LocationOnIcon
                      className="upcoming-event-icon"
                      sx={{ color: "#d34836" }}
                    />{" "}
                    {upcomingShow.location}
                  </Typography>
                  <Link to={`/showdetails/${upcomingShow.id}`}>
                    <Button variant="outlined" className="see-details-button">
                      See Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ShowDetailsPage;
