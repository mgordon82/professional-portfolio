import { Box, Stack, Typography } from '@mui/material';

const Section = ({ title, children, ...props }) => {
  return (
    <Box component='section'>
      <Stack direction='row' gap={3}>
        <Box sx={{ borderRight: '2px solid #333' }}>
          <Typography
            component='h2'
            sx={{
              width: 100,
              textAlign: 'right',
              paddingRight: '10px',
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
