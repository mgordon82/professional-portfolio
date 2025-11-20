import { Container } from '@mui/material';
import React from 'react';

import { Outlet } from 'react-router';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  return (
    <Container maxWidth disableGutters>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
