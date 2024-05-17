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
import { Link } from "react-router-dom";

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
        backgroundColor: "#001220",
        color: "#fff"
      }}
    >
      <ListItem button component={Link} to="/">
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about">
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/shows">
        <ListItemText primary="Shows" />
      </ListItem>
      <ListItem button component={Link} to="/contact">
        <ListItemText primary="Contact" />
      </ListItem>
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
        background: `transparent`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: "none",
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
          sx={{ flexGrow: 1, color: "#fff", fontFamily:'YourCustomFont' }}
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
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={drawerOpen}
              onClick={toggleDrawer(false)}
              style={{
                width: "60%",
                position: "absolute",
                top: "80%",
                marginTop: "25px",
                fontFamily: "YourCustomFont",
              }}
              PaperProps={{
                style: {
                  backgroundColor: "#f5f5f5",
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
                style={{ fontFamily: "Gasoek One" }}
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Button
                style={{ fontFamily: "Gasoek One" }}
                color="inherit"
                component={Link}
                to="/about"
              >
                About
              </Button>
              <Button
                style={{ fontFamily: "Gasoek One" }}
                color="inherit"
                component={Link}
                to="/shows"
              >
                Shows
              </Button>
              <Button
                style={{ fontFamily: "Gasoek One" }}
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
