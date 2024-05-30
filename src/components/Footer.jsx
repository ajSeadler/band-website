import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import styled from 'styled-components';

const StyledFooter = styled.div`
  padding: 20px;
  background-color: #333;
  margin-top: 0px;
  color: white;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;


const CopyrightText = styled.p`
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }

  a {
    color: white;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #1db954;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          
          <Col xs="12" md="6" className="text-center">
            <SocialIcons>
              <a href="https://open.spotify.com/artist/3SwSE7OtWzLOrc32Eq54gO" target="_blank" rel="noopener noreferrer">
                <FaSpotify className="icon" size={30} />
              </a>
              <a href="https://music.apple.com/us/artist/disco-stranger/1529203061" target="_blank" rel="noopener noreferrer">
                <FaApple className="icon" size={30} />
              </a>
              <a href="https://www.youtube.com/@discostranger7103" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="icon" size={30} />
              </a>
              <a href="https://www.instagram.com/discostranger/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" size={30} />
              </a>
              <a href="https://www.facebook.com/discostrangerband/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" size={30} />
              </a>
            </SocialIcons>
          </Col>
          <Col xs="12" md="6" className="text-center mb-2 mt-3 mb-md-0">
            <CopyrightText>© 2024 Disco Stranger Music. All rights reserved.</CopyrightText>
            <p style={{fontSize:'.8rem'}}>Built and designed by AJ Seadler</p>
          </Col>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
