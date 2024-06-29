import React from "react";
import { Container, Paper, Typography, Link } from "@mui/material";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa"; // Added FaEnvelope for email icon
import styled from "styled-components";
import ContactUs from "./ContactUs";
import "../styles/Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div>
      <Container maxWidth="md" style={{ width: "100%", marginTop: "20vh" }}>
        {/* Added top margin */}
        <Paper elevation={0} className="contact-paper">
          <Typography
            variant="h5"
            gutterBottom
            style={{ fontFamily: "Gasoek One", color: "#fff" }}
          >
            CONTACT
          </Typography>

          <Typography
            variant="body1"
            paragraph
            style={{ fontFamily: "Bebas Neue", color: "#fff" }}
          >
            Want to book us? Reach out and send an email below!
          </Typography>
          {/* Social Links */}
          {/* <div className="social-icons">
            <a
              href="https://open.spotify.com/artist/3SwSE7OtWzLOrc32Eq54gO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify size={30} />
            </a>
            <a
              href="https://music.apple.com/us/artist/disco-stranger/1529203061"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaApple size={30} />
            </a>
            <a
              href="https://www.youtube.com/@discostranger7103"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://www.instagram.com/discostranger/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.facebook.com/discostrangerband/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </a>
          </div> */}

          {/* Contact Us Component */}
          <ContactUs />

          {/* Email Section */}
          <Typography variant="h6" className="contact-info">
            <FaEnvelope size={25} className="email-icon" />
            {":"}
            {/* Updated email icon */}
            <Link
              href="mailto:discostrangermusic@gmail.com"
              className="contact-email"
            >
              discostrangermusic@gmail.com
            </Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default Contact;
