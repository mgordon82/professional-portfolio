import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

import logo from '../../assets/images/logo.webp';
import Navigation from './Navigation';
import { colors } from '../../theme/colors';

const Header = () => {
  return (
    <Box
      component='header'
      sx={{ backgroundColor: colors.headerBg, padding: '15px' }}
    >
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' gap={1}>
          <Box
            component={Image}
            src={logo}
            priority
            alt='letters M and G in logo'
            sx={{
              height: 75,
              width: 75
            }}
          />
          <Stack>
            <Typography
              component='div'
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
              Senior Software Engineer
            </Typography>
          </Stack>
        </Stack>
        <Navigation />
      </Stack>
    </Box>
  );
};

export default Header;
