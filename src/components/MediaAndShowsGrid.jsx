import React from "react";
import UpcomingShows from "./UpcomingShows";
import Media from "./Media";
import "../styles/MediaAndShowsGrid.css";

const MediaAndShowsGrid = () => {
  return (
    <div className="media-and-shows-grid">
      <UpcomingShows />
      <Media />
    </div>
  );
};

export default MediaAndShowsGrid;
