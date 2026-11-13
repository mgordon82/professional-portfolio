import { Box, Link, Stack, Typography } from '@mui/material';
import { resumeData } from '../../data/resumeData';
import { colors } from '../../theme/colors';

const ResumeHeader = () => (
  <Box sx={{ mb: 4 }}>
    <Typography component='h1' variant='h3' sx={{ fontWeight: 700 }}>
      {resumeData.name}
      {resumeData.pronouns && (
        <Typography
          component='span'
          variant='h6'
          sx={{ ml: 1, fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}
        >
          ({resumeData.pronouns})
        </Typography>
      )}
    </Typography>
    <Typography variant='h5' sx={{ color: colors.accent, mb: 1 }}>
      {resumeData.title}
    </Typography>
    <Typography variant='body2' sx={{ color: colors.textMuted }}>
      {resumeData.contact.location} ·{' '}
      <Link
        href={`mailto:${resumeData.contact.email}`}
        sx={{ color: colors.accent }}
      >
        {resumeData.contact.email}
      </Link>
    </Typography>

    <Stack direction='row' spacing={2} sx={{ mt: 1, flexWrap: 'wrap' }}>
      {resumeData.links.map((link) => (
        <Link
          key={link.label}
          href={link.url}
          target='_blank'
          rel='noreferrer'
          sx={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '0.9rem',
            borderBottom: '1px solid transparent',
            '&:hover': {
              color: colors.accent,
              borderBottom: `1px solid ${colors.accent}`
            }
          }}
        >
          {link.label}
        </Link>
      ))}
    </Stack>
  </Box>
);

export default ResumeHeader;
