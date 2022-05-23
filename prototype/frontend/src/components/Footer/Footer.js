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
      sx={{ height: '10vh', bottom: 0, left: 0, right: 0, bgcolor: 'primary.main', color: 'primary.contrastText'}}
    >
      <Typography sx={{ fontFamily: 'playfair' }}>
        Made with &hearts; by Giselle Dougan, Justin Scabarozi, Kareem Darghous, Khoa Ly, and Tomas Prieto
      </Typography>

    </Box>
  );
}

export default Footer;