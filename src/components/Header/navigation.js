import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'About Me', to: '/' },
    { label: 'Resume', to: '/resume' }
    // { label: 'Web Projects', to: '/' },
    // { label: 'Contact Me', to: '/' }
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <Box
      component='nav'
      aria-label='Main navigation'
      sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
    >
      <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
        {menuItems.map((item) => (
          <Button
            key={item.to}
            component={RouterLink}
            to={item.to}
            color='inherit'
            sx={{
              textTransform: 'none',
              fontWeight: isActive(item.to) ? 600 : 400,
              borderBottom: isActive(item.to)
                ? '2px solid #00bebe'
                : '2px solid transparent',
              '&:focus-visible': {
                outline: '2px solid #00bebe',
                outlineOffset: 2
              }
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>

      <IconButton
        sx={{ display: { xs: 'flex', sm: 'none' }, color: '#00bebe' }}
        aria-label='Open main navigation'
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ component: 'nav', 'aria-label': 'Main navigation' }}
      >
        <List sx={{ width: 240 }}>
          {menuItems.map((item) => (
            <ListItem key={item.to} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.to}
                onClick={() => setOpen(false)}
                selected={isActive(item.to)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navigation;
