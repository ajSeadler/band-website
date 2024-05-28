import React from 'react';
import { Container, Paper, Typography, Link } from '@mui/material';
import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import styled from 'styled-components';
import ContactUs from './ContactUs'

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    color: #1db954;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #333;
    }
  }
`;

const Contact = () => {
  return (
    <>
    <div style={{ marginTop: '0%' }}> {/* Adjusted positioning */}
      <Container maxWidth="md" style={{width:'100%', height:'100vh'}}>
        <Paper elevation={3} style={{ padding: '30px', borderRadius: '15px' }}>
          <Typography variant="h5" gutterBottom style={{ fontFamily: 'Gasoek One' }}>
            CONTACT
          </Typography>
          
          <Typography variant="body1" paragraph style={{ fontFamily: 'Bebas Neue' }}>
            Want to book us? Reach out and send an email below!
          </Typography>
          <Typography variant="h6" style={{ display: 'flex', alignItems: 'center', marginBottom: '2%' }}>
            <img src="pics/email.png" alt="Email" style={{ height: '30px', marginRight: '10px', borderRadius: '5px' }} />
            <Link href="mailto:discostrangermusic@gmail.com" style={{ fontSize: '1rem' }}>
              discostrangermusic@gmail.com
            </Link>
          </Typography>

          {/* Social Links */}
          <SocialIcons>
            <a href="https://open.spotify.com/artist/3SwSE7OtWzLOrc32Eq54gO" target="_blank" rel="noopener noreferrer">
              <FaSpotify size={30} />
            </a>
            <a href="https://music.apple.com/us/artist/disco-stranger/1529203061" target="_blank" rel="noopener noreferrer">
              <FaApple size={30} />
            </a>
            <a href="https://www.youtube.com/@discostranger7103" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} />
            </a>
            <a href="https://www.instagram.com/discostranger/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.facebook.com/discostrangerband/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
          </SocialIcons>
          
        </Paper>
        <ContactUs />
        
      </Container> 
    </div>
    </>
  );
};

export default Contact;
