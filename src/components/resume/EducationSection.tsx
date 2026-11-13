import { Box, Stack, Typography } from '@mui/material';
import { resumeData } from '../../data/resumeData';
import { colors } from '../../theme/colors';

const EducationSection = () => (
  <Box sx={{ mb: 2 }}>
    <Typography component='h2' variant='h5' sx={{ mb: 2 }}>
      Education & Certifications
    </Typography>
    <Stack spacing={1.5}>
      {resumeData.education.map((edu) => (
        <Box key={`${edu.school}-${edu.credential}`}>
          <Typography
            component='h3'
            variant='subtitle1'
            sx={{ fontWeight: 600 }}
          >
            {edu.credential}
          </Typography>
          <Typography variant='body2' sx={{ color: colors.textSoft }}>
            {edu.school}
            {edu.location ? ` · ${edu.location}` : ''}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default EducationSection;
