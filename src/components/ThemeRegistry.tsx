'use client';

import type { ReactNode } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { colors } from '../theme/colors';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.accent,
      dark: colors.accentDark,
      contrastText: colors.pageBg
    },
    background: {
      default: colors.pageBg
    },
    text: {
      primary: '#fff'
    }
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#fff',
          borderRadius: 8,
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: colors.accent,
            color: '#fff'
          },
          '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: colors.accent,
            color: '#fff'
          }
        }
      }
    }
  }
});

const ThemeRegistry = ({ children }: { children: ReactNode }) => (
  <AppRouterCacheProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </AppRouterCacheProvider>
);

export default ThemeRegistry;
