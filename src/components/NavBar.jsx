import React from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      // cool i guess, not like anyone would be able to use it though (shift & tab for mobile drawer)
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
      <Typography
        variant="h6"
        style={{
          textAlign: "center",
          margin: "10px",
          color: "#FFF",
          fontFamily: "Oswald",
        }}
      >
        DISCO STRANGER
      </Typography>
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

  //

  return (
    <AppBar
      position="sticky"
      sx={{
        background: `url("/testwave.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: "none",
        boxShadow: "none",
        zIndex: 1,
      }}
    >
      <Toolbar>
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
            {/* Logo image */}
            {/* <img
              src="/pics/whitelogo.PNG"
              alt="Your Band Logo"
              style={{ height: "50px", marginRight: "auto" }}
            /> */}
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
