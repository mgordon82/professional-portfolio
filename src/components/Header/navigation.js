import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';

const Navigation = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'About Me', path: '/' },
    { label: 'Resume', path: 'resume' },
    { label: 'Web Projects', path: '/' },
    { label: 'Contact Me', path: '/' }
  ];

  return (
    <Box>
      <MenuList
        sx={{
          display: { xs: 'none', sm: 'flex' },
          gap: 2,
          color: '#fff'
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            onClick={() => item.path && navigate(item.path)}
          >
            <Typography sx={{ textAlign: 'center' }}>{item.label}</Typography>
          </MenuItem>
        ))}
      </MenuList>

      <IconButton
        sx={{ display: { xs: 'flex', sm: 'none' }, color: '#00bebe' }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <MenuList sx={{ width: 200, p: 2 }}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              onClick={() => {
                setOpen(false);
                item.path && navigate(item.path);
              }}
            >
              <Typography sx={{ textAlign: 'left' }}>{item.label}</Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Drawer>
    </Box>
  );
};

export default Navigation;
