import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import AppRouter from './router';

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#444'
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
              backgroundColor: '#00bebe',
              color: '#fff'
            },
            '&.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: '#00bebe',
              color: '#fff'
            }
          }
        }
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
