import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box
      sx={{
        padding: '25px',
        backgroundColor: '#00bebe',
        borderTop: '3px solid #333',
        position: 'sticky',
        bottom: 0,
        width: '100%'
      }}
    >
      <footer>
        <Typography component='p'>
          &copy; {year} Matt Gordon All Rights Reserved.
        </Typography>
      </footer>
    </Box>
  );
};

export default Footer;
