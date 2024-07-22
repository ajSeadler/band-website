import React from "react";
import UpcomingShows from "./UpcomingShows";
import Media from "./Media";
import "../styles/MediaAndShowsGrid.css";

const MediaAndShowsGrid = () => {
  return (
    <div className="media-and-shows-grid">
      <div className="shows-section">
        <UpcomingShows />
      </div>
      <div className="media-section">
        <Media />
      </div>
    </div>
  );
};

export default MediaAndShowsGrid;
