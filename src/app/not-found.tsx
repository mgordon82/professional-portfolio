import type { Metadata } from 'next';
import { Box, Stack, Typography } from '@mui/material';
import LinkButton from '../components/LinkButton';
import { colors } from '../theme/colors';

export const metadata: Metadata = {
  title: 'Page not found'
};

const NotFound = () => (
  <Stack
    sx={{
      minHeight: '100%',
      bgcolor: colors.pageBg,
      color: '#fff',
      px: { xs: 2, sm: 3, md: 5 },
      py: { xs: 3, md: 6 },
      justifyContent: 'center'
    }}
  >
    <Box
      component='section'
      sx={{
        p: { xs: 3, md: 6 },
        borderRadius: 4,
        border: '1px solid rgba(0, 190, 190, 0.25)',
        background: `
          radial-gradient(
            circle at 85% 50%,
            rgba(0, 190, 190, 0.12),
            transparent 30%
          ),
          linear-gradient(
            135deg,
            rgba(0, 190, 190, 0.08),
            rgba(5, 6, 8, 0.95) 50%
          )
        `
      }}
    >
      <Stack spacing={2.5}>
        <Typography
          variant='body2'
          sx={{ color: colors.accent, fontWeight: 600, letterSpacing: 0.5 }}
        >
          404 · PAGE NOT FOUND
        </Typography>

        <Typography
          component='h1'
          variant='h2'
          sx={{ fontWeight: 700, lineHeight: 1.1, maxWidth: 850 }}
        >
          This page doesn&apos;t exist
        </Typography>

        <Typography
          variant='h5'
          color='text.secondary'
          sx={{ lineHeight: 1.5, maxWidth: 850 }}
        >
          The link may be broken or the page may have moved. Head back to the
          portfolio or take a look at my resume.
        </Typography>

        <Stack direction='row' spacing={2} useFlexGap flexWrap='wrap'>
          <LinkButton href='/' variant='contained'>
            Go Home
          </LinkButton>
          <LinkButton href='/resume'>View Resume</LinkButton>
        </Stack>
      </Stack>
    </Box>
  </Stack>
);

export default NotFound;
