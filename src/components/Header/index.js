import React from 'react';
import { Box, MenuItem, MenuList, Stack, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box component='header' sx={{ backgroundColor: '#333', padding: '15px' }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography
          sx={{
            padding: '0 15px',
            backgroundColor: '#00bebe',
            fontSize: '1.8em'
          }}
        >
          Matt Gordon&apos;s Portfolio
        </Typography>
        <MenuList sx={{ display: 'flex', gap: 2, color: '#fff' }}>
          <MenuItem>
            <Typography sx={{ textAlign: 'center' }}>About Me</Typography>
          </MenuItem>
          <MenuItem>
            <Typography sx={{ textAlign: 'center' }}>Web Projects</Typography>
          </MenuItem>
          <MenuItem>
            <Typography sx={{ textAlign: 'center' }}>Contact Me</Typography>
          </MenuItem>
        </MenuList>
      </Stack>
    </Box>
  );
};

export default Header;
