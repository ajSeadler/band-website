// SpinnerBanner.jsx
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Box } from '@mui/material';

const SpinnerBanner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        color: '#000',
        padding: '10px 0',
        overflow: 'hidden',
      }}
    >
      <Marquee speed={60}>
        <h1 style={{ margin: '0 20px' }}>'DISCO STRANGER' EP OUT NOW!</h1>
        <h1 style={{ margin: '0 20px' }}>'DISCO STRANGER' EP OUT NOW!</h1>
        <h1 style={{ margin: '0 20px' }}>'DISCO STRANGER' EP OUT NOW!</h1>
        <h1 style={{ margin: '0 20px' }}>'DISCO STRANGER' EP OUT NOW!</h1>
      </Marquee>
    </Box>
  );
};

export default SpinnerBanner;
