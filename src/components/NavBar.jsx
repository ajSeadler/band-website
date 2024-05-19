import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navLinks = (
    <List
      style={{
        position: "relative",
        height: "100%",
        backgroundColor: "#000",
        color: "#fff",
        paddingTop: "20px",
      }}
    >
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="close"
        onClick={toggleDrawer(false)}
        sx={{ position: 'absolute', right: 0, marginRight: 2 }}
      >
        <CloseIcon />
      </IconButton>
      <Typography sx={{ margin: '10px', fontSize: '1.8rem', textAlign: 'center' }}>DISCO STRANGER</Typography>
      <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
        <ListItemText primary="Home" primaryTypographyProps={{ style: { fontSize: '1.5rem' } }} />
      </ListItem>
      <ListItem button component={Link} to="/shows" onClick={toggleDrawer(false)}>
        <ListItemText primary="Shows" primaryTypographyProps={{ style: { fontSize: '1.5rem' } }} />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
        <ListItemText primary="Contact" primaryTypographyProps={{ style: { fontSize: '1.5rem' } }} />
      </ListItem>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center', paddingBottom: 2 }}>
        <a href="https://open.spotify.com/artist/3SwSE7OtWzLOrc32Eq54gO" target="_blank" rel="noopener noreferrer">
          <FaSpotify className="icon" size={30} style={{ margin: '0 10px', color:'#fff' }} />
        </a>
        <a href="https://music.apple.com/us/artist/disco-stranger/1529203061" target="_blank" rel="noopener noreferrer">
          <FaApple className="icon" size={30} style={{ margin: '0 10px', color:'#fff' }} />
        </a>
        <a href="https://www.youtube.com/@discostranger7103" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" size={30} style={{ margin: '0 10px', color:'#fff' }} />
        </a>
        <a href="https://www.instagram.com/discostranger/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" size={30} style={{ margin: '0 10px', color:'#fff' }} />
        </a>
        <a href="https://www.facebook.com/discostrangerband/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" size={30} style={{ margin: '0 10px', color:'#fff' }} />
        </a>
      </Box>
    </List>
  );

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll Down
        setShowNavBar(false);
      } else {
        // Scroll Up
        setShowNavBar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      sx={{
        background: `#000`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: "none",
        padding:'10px',
        boxShadow: "none",
        zIndex: 1,
        transform: showNavBar ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#fff", fontFamily: 'YourCustomFont', fontSize:'1.6rem', marginRight:'10%' }}
        >
          DISCO STRANGER
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="top"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                style: {
                  backgroundColor: "#000",
                  height: "100vh",
                },
              }}
            >
              {navLinks}
            </Drawer>
          </>
        ) : (
          <>
            {/* Navigation buttons */}
            <div>
              <Button
                color="inherit"
                style={{ fontFamily: "Gasoek One", fontSize: '1.2rem' }}
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Button
                style={{ fontFamily: "Gasoek One", fontSize: '1.2rem' }}
                color="inherit"
                component={Link}
                to="/shows"
              >
                Shows
              </Button>
              <Button
                style={{ fontFamily: "Gasoek One", fontSize: '1.2rem' }}
                color="inherit"
                component={Link}
                to="/contact"
              >
                Contact
              </Button>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
