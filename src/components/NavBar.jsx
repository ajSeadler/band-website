import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const top = window.scrollY;
    setShowNavbar(top === 0);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const isActive = (path) => location.pathname === path;

  return (
    <Slide appear={false} direction="down" in={showNavbar || !trigger}>
      <AppBar
        position="fixed"
        sx={{
          background: `transparent`,
          marginTop:'10px',
          padding: "0px 0",
          boxShadow: "none",
          zIndex: 999,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            textAlign: "center",
            zIndex: 999,
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "#fff",
              fontFamily: "YourCustomFont",
              marginBottom: 0,
            }}
          >
            DISCO STRANGER
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 0,
            }}
          >
            <a
              href="https://open.spotify.com/artist/3SwSE7OtWzLOrc32Eq54gO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify
                className="icon"
                size={25}
                style={{ margin: "5px", color: "#fff" }}
              />
            </a>
            <a
              href="https://music.apple.com/us/artist/disco-stranger/1529203061"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaApple
                className="icon"
                size={25}
                style={{ margin: "5px", color: "#fff" }}
              />
            </a>
            <a
              href="https://www.youtube.com/@discostranger7103"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="icon"
                size={25}
                style={{ margin: "5px", color: "#fff" }}
              />
            </a>
            <a
              href="https://www.instagram.com/discostranger/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="icon"
                size={25}
                style={{ margin: "5px", color: "#fff" }}
              />
            </a>
            <a
              href="https://www.facebook.com/discostrangerband/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="icon"
                size={25}
                style={{ margin: "5px", color: "#fff" }}
              />
            </a>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Button
              color="inherit"
              style={{
                fontFamily: "Oswald",
                fontSize: "1.2rem",
                margin: "0px",
                color: isActive("/") ? "#fff" : "#fff", // Active color change
              }}
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              style={{
                fontFamily: "Oswald",
                fontSize: "1.2rem",
                margin: "0px",
                color: isActive("/shows") ? "#DC965A" : "#fff", // Active color change
              }}
              color="inherit"
              component={Link}
              to="/shows"
            >
              Shows
            </Button>
            <Button
              style={{
                fontFamily: "Oswald",
                fontSize: "1.2rem",
                margin: "0px",
                color: isActive("/about") ? "#DC965A" : "#fff", // Active color change
              }}
              color="inherit"
              component={Link}
              to="/about"
            >
              About
            </Button>
            <Button
              style={{
                fontFamily: "Oswald",
                fontSize: "1.2rem",
                margin: "0px",
                color: isActive("/contact") ? "#DC965A" : "#fff", // Active color change
              }}
              color="inherit"
              component={Link}
              to="/contact"
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default NavBar;
