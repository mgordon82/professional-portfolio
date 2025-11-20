import { Box, Container } from '@mui/material';
import React from 'react';

import { Outlet } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <Container
      maxWidth
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Header />
      <Box component='main' sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
};

export default Layout;
