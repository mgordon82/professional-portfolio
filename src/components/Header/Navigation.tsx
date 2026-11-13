'use client';

import { useState } from 'react';
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
import Link from 'next/link';
import { colors } from '../../theme/colors';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Resume', to: '/resume' }
  ];

  const isActive = (to: string) => pathname === to;

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
            component={Link}
            href={item.to}
            color='inherit'
            sx={{
              textTransform: 'none',
              fontWeight: isActive(item.to) ? 600 : 400,
              borderBottom: isActive(item.to)
                ? `2px solid ${colors.accent}`
                : '2px solid transparent',
              '&:focus-visible': {
                outline: `2px solid ${colors.accent}`,
                outlineOffset: 2
              }
            }}
          >
            {item.label}
          </Button>
        ))}
      </Box>

      <IconButton
        sx={{ display: { xs: 'flex', sm: 'none' }, color: colors.accent }}
        aria-label='Open main navigation'
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor='right'
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: { component: 'nav', 'aria-label': 'Main navigation' }
        }}
      >
        <List sx={{ width: 240 }}>
          {menuItems.map((item) => (
            <ListItem key={item.to} disablePadding>
              <ListItemButton
                component={Link}
                href={item.to}
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
