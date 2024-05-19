// HomePage.jsx
import React, { useState, useEffect } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { motion } from "framer-motion";
import {
  Paper,
} from "@mui/material";
import ContactUs from "./ContactUs";
import Streaming from "./Streaming";
import Media from "./Media";
import AboutUs from "./AboutUs";
import UpcomingShows from "./UpcomingShows"

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

        {/* This section follows the hero section */}
        <Paper
          className="video-section"
          elevation={1}
          style={{
            padding: "20px",
            marginTop: "0px",
            backgroundColor: '#000',
            border: "none",
          }}
        >
          <UpcomingShows />
          <Media />
          <Streaming />
          <AboutUs />
          <ContactUs />
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
