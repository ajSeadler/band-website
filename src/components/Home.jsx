import React, { useState, useEffect } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import Streaming from "./Streaming";
import MediaAndShowsGrid from "./MediaAndShowsGrid";
import SpinnerBanner from "./SpinnerBanner";
import ImageGrid from "./ImageGrid";
import Countdown from "./Countdown";

const Home = () => {
  const [showScrollDownText, setShowScrollDownText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollDownText(scrollPosition === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="home-pg">
        <div className={`bio text-white p-3 p-md-5`}></div>
        <SpinnerBanner />
        <Paper
          className="video-section"
          elevation={1}
          style={{
            padding: "15px",
            marginTop: "0px",
            background: "url('/site-background.jpeg')",
            backgroundSize: "cover", // Ensure the image covers the entire container
            backgroundRepeat: "no-repeat", // Prevent the image from repeating
            backgroundPosition: "center", // Center the image within the container
            border: "none",
          }}
        >
          <Countdown />
          <MediaAndShowsGrid />
          <ImageGrid />
          <Streaming />
        </Paper>
      </div>
      {showScrollDownText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.5,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className="scroll-down-container"
          style={{
            position: "fixed",
            zIndex: 3,
            bottom: "20px",
            left: "50px",
            right: "50px",
            transform: "translateX(-50%)",
            color: "#fff",
            fontSize: "16px",
            fontWeight: 100,
            padding: "10px 20px",
            margin: "0px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "10px", fontFamily: "Bebas Neue" }}>
            Scroll down
          </div>
          <ArrowDownwardIcon fontSize="small" />
        </motion.div>
      )}
    </>
  );
};

export default Home;
