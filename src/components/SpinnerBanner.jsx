// SpinnerBanner.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";

const SpinnerBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        color: "#000",
        padding: "10px 0",
        overflow: "hidden",
      }}
    >
      <Marquee speed={30}>
        <h3 style={{ margin: "0 20px" }}>'SMELLS LIKE A NEW SINGLE..</h3>
        <h3 style={{ margin: "0 20px" }}>'SMELLS LIKE A NEW SINGLE..</h3>
        <h3 style={{ margin: "0 20px" }}>'SMELLS LIKE A NEW SINGLE..</h3>
        <h3 style={{ margin: "0 20px" }}>'SMELLS LIKE A NEW SINGLE..</h3>
      </Marquee>
    </Box>
  );
};

export default SpinnerBanner;
