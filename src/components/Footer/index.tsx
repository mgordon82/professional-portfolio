import { Box, Typography } from '@mui/material';
import { colors } from '../../theme/colors';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box
      sx={{
        padding: '25px',
        backgroundColor: colors.accent,
        borderTop: `3px solid ${colors.headerBg}`,
        width: '100%'
      }}
    >
      <Typography component='p'>
        &copy; {year} Matt Gordon All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
