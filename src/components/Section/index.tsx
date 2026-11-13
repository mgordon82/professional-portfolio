import type { ReactNode } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { colors } from '../../theme/colors';

interface SectionProps {
  title: string;
  children?: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <Box component='section'>
      <Stack direction={{ xs: 'column', sm: 'row' }} gap={3}>
        <Box
          sx={{
            borderRight: {
              xs: 'none',
              sm: `2px solid ${colors.headerBg}`
            },
            borderBottom: {
              xs: `2px solid ${colors.headerBg}`,
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

export default Section;
