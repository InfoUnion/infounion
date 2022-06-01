import React from 'react';
import { Typography, Box } from '@mui/material';
import './Footer.css';

function Footer() {
  return (
    <Box
      className='footer'
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{ height: '10vh', bottom: 0, left: 0, right: 0 }}
    >
      <Typography sx={{ fontFamily: 'playfair' }}>
        Made with &hearts; by <a href="https://www.linkedin.com/in/giselle-dougan-166933153/">Giselle Dougan, </a>
        <a href="https://www.linkedin.com/in/justin-scabarozi-620329219"> Justin Scabarozi,</a>
        <a href="https://www.linkedin.com/in/kareem-d-35786a109/"> Kareem Darghous</a>
        <a href="https://www.linkedin.com/in/khoaly/"> Khoa Ly</a>
        <a href="https://www.linkedin.com/in/tom%C3%A1s-prieto-577a44225/"> Tomas Prieto </a>
      </Typography>

    </Box>
  );
}

export default Footer;