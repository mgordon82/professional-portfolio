import React from 'react';
import PropTypes from 'prop-types';

import { Box, Stack, Typography } from '@mui/material';

const Section = ({ title, children }) => {
  return (
    <Box component='section'>
      <Stack direction={{ xs: 'column', sm: 'row' }} gap={3}>
        <Box
          sx={{
            borderRight: {
              xs: 'none',
              sm: '2px solid #333'
            },
            borderBottom: {
              xs: '2px solid #333',
              sm: 'none'
            },
            pb: { xs: 1, sm: 0 }
          }}
        >
          <Typography
            component='h2'
            sx={{
              width: { xs: '100%', sm: 100 },
              textAlign: { xs: 'left', sm: 'right' },
              paddingRight: { xs: 0, sm: '10px' },
              fontSize: '1.6em'
            }}
          >
            {title}
          </Typography>
        </Box>
        <Stack direction='row' gap={3}>
          {children}
        </Stack>
      </Stack>
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

export default Section;
