import React from 'react';
import { Container, Paper, Typography, Link, Grid } from '@mui/material';
import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';;
import ContactUs from './ContactUs'
import styled from 'styled-components';


const SocialIcons = styled.div`
  display: flex;
  color: #333;
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

const Contact = () => {
  return (
    <div className='cont-pg' style={{ display: 'flex', flexDirection: 'column',background: '#001220', minHeight: '85.1vh', marginTop:'-20%' }}>
      <Container maxWidth="md" style={{marginTop:'20%'}}>
        <Paper elevation={3} style={{ padding: '30px', marginTop: '15%', borderRadius: '15px' }}>
          <Typography variant="h5" gutterBottom style={{fontFamily: 'Gasoek One'}}>
            CONTACT
          </Typography>
          
          <Typography variant="body1" paragraph style={{fontFamily:'Bebas Neue'}}>
            Want to book us? Reach out and send an email below!
          </Typography>
          <Typography variant="h6" style={{ marginTop: '0px', display: 'flex', alignItems: 'center', marginBottom:'2%' }}>
            <img src="pics/email.png" alt="Email" style={{ height: '30px', margin:'auto',  borderRadius: '5px', textAlign:'left' }} />
            <Link href="mailto:discostrangermusic@gmail.com" style={{fontSize:'1rem'}}>
              discostrangermusic@gmail.com
            </Link>
          </Typography>

          {/* Social Links */}
          <SocialIcons>
              <a href="https://open.spotify.com/artist/3SwSE7OtWzLOrc32Eq54gO" target="_blank" rel="noopener noreferrer">
                <FaSpotify className="icon" size={30} style={{color:'#333'}}/>
              </a>
              <a href="https://music.apple.com/us/artist/disco-stranger/1529203061" target="_blank" rel="noopener noreferrer">
                <FaApple className="icon" size={30} style={{color:'#333'}}/>
              </a>
              <a href="https://www.youtube.com/@discostranger7103" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="icon" size={30} style={{color:'#333'}}/>
              </a>
              <a href="https://www.instagram.com/discostranger/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" size={30} style={{color:'#333'}}/>
              </a>
              <a href="https://www.facebook.com/discostrangerband/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" size={30} style={{color:'#333'}}/>
              </a>
            </SocialIcons>
        </Paper>

        <ContactUs />
        
      </Container> 
      

      
    </div>
  );
};

export default Contact;
