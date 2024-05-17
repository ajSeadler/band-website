import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageGallery from "./ImageGallery";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  const [showScrollDownText, setShowScrollDownText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollDownText(scrollPosition === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="about-pg">
      <div className={`bio text-white p-3 p-md-5`}>
      </div>

      <div className="row" style={{ color: '#fff', margin: '5%', }}>
        <div className="col-12"></div>
        <div className="col-md-10 mx-auto" style={{ fontFamily: 'Oswald' }}>
          <h1 className="psychedelic-title"></h1>
          <p className="mb-4">
            Disco Stranger originally started out as a cover band under the
            name "Steve French and Company" until they heard one too many
            “PLAY KID ROCK!” requests and decided to write their own
            original material. The band name is an ode to the Eagles and
            their song “Disco Strangler”, a band they covered quite a bit
            and grew up on.
          </p>
          <h6 className="mb-4">
            Meet the incredible talents that form the heart and soul of
            Disco Stranger:
          </h6>
          <ul>
            <li className="mb-2">
              <i className="fas fa-microphone-alt"></i>{" "}
              <strong>Drew Stogsdill:</strong> Lead Vocals and Rhythm Guitar
            </li>
            <li className="mb-2">
              <i className="fa-solid fa-guitar"></i>{" "}
              <strong>AJ Seadler:</strong> Lead Guitar
            </li>
            <li className="mb-2">
              <i className="fas fa-bass-guitar"></i>{" "}
              <strong>Colton Walkup:</strong> Bass
            </li>
            <li className="mb-2">
              <i className="fas fa-drum-set"></i>{" "}
              <strong>Nathaniel Lee:</strong> Drums
            </li>
          </ul>
          <p>
            Together, they are more than a band; they are the architects of
            an auditory journey. Listen to Disco Stranger today!
          </p>
        </div>
      </div>
      <ImageGallery />
    </div>
    {showScrollDownText && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.5, type: "spring", stiffness: 200, damping: 10 }}
        className="scroll-down-container"
        style={{
          position: "fixed",
          zIndex: 3,
          bottom: "20px",
          left: "50px",
          right:'50px',
          transform: "translateX(-50%)",
          color: "#fff",
          fontSize: "16px",
          fontWeight: 100,
          padding: "10px 20px",
          margin:'0px',
          borderRadius: "5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginTop: "10px" }}>Scroll down</div>
        <ArrowDownwardIcon fontSize="small" />
      </motion.div>
    )}
    </>
  );
};

export default AboutUs;
