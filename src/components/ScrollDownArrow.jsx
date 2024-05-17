import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const ScrollDownArrow = ({ onClick }) => {
  const [isBouncing, setIsBouncing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBouncing((prev) => !prev);
    }, 1000); // Change the interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`scroll-down-arrow ${isBouncing ? "bounce" : ""}`}>
      <IconButton aria-label="scroll down" onClick={onClick}>
        <ArrowDropDownCircleIcon style={{ color: 'salmon', fontSize: '3rem' }} />
      </IconButton>
    </div>
  );
};

export default ScrollDownArrow;
