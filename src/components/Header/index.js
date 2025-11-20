import React from 'react';
import { Box, MenuItem, MenuList, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import logo from '../../assets/images/logo.png';
import Navigation from './navigation';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box component='header' sx={{ backgroundColor: '#333', padding: '15px' }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' gap={1}>
          <Box
            component='img'
            src={logo}
            alt='letters M and G in logo'
            sx={{
              height: 75,
              width: 75
            }}
          />
          <Stack>
            <Typography
              component='h1'
              sx={{
                fontSize: '1.8em',
                lineHeight: '1em'
              }}
            >
              Matt Gordon
            </Typography>
            <Typography
              sx={{
                fontSize: '1em',
                fontStyle: 'italic'
              }}
            >
              Senior Front-End Developer/Engineer
            </Typography>
          </Stack>
        </Stack>
        <Navigation />
      </Stack>
    </Box>
  );
};

export default Header;
