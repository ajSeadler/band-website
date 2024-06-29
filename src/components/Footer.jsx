import React from "react";
import { Container, Col } from "react-bootstrap";
import {
  FaSpotify,
  FaApple,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import DiscoBall from "./DiscoBall";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="styled-footer">
      <Container>
        <div className="footer-content">
          <Col xs="12" md="6" className="text-center">
            <div className="social-icons">
              <a
                href="https://open.spotify.com/artist/3SwSE7OtWzLOrc32Eq54gO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSpotify className="icon" size={30} />
              </a>
              <a
                href="https://music.apple.com/us/artist/disco-stranger/1529203061"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaApple className="icon" size={30} />
              </a>
              <a
                href="https://www.youtube.com/@discostranger7103"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icon" size={30} />
              </a>
              <a
                href="https://www.instagram.com/discostranger/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" size={30} />
              </a>
              <a
                href="https://www.facebook.com/discostrangerband/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" size={30} />
              </a>
            </div>
          </Col>
          <Col xs="12" md="6" className="text-center mb-2 mt-3 mb-md-0">
            <p className="copyright-text">
              © 2024 Disco Stranger Music. All rights reserved.
            </p>
            <p style={{ fontSize: ".8rem" }}>
              Built and designed by AJ Seadler
            </p>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
