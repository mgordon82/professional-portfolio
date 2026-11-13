import { Box, Card, CardContent, Link, Stack, Typography } from '@mui/material';
import { projects } from '../../data/projects';
import { colors } from '../../theme/colors';
import BulletList from './BulletList';
import TechChip from './TechChip';

const linkSx = { color: colors.accent, fontSize: '0.9rem' };

const resumeProjects = projects.filter((project) => project.resume);

const ProjectsSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography component='h2' variant='h5' sx={{ mb: 2 }}>
      Projects
    </Typography>
    <Stack spacing={2}>
      {resumeProjects.map(({ resume, ...project }) =>
        resume ? (
          <Card
            key={project.name}
            sx={{
              bgcolor: colors.cardBg,
              border: `1px solid ${colors.border}`
            }}
          >
            <CardContent>
              <Typography
                component='h3'
                variant='subtitle1'
                sx={{ fontWeight: 600 }}
              >
                {project.name} (Independent Project)
              </Typography>
              <Typography variant='body2' sx={{ color: colors.textMuted }}>
                {resume.role}
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: 'rgba(255,255,255,0.5)', mb: 1.5 }}
              >
                {resume.start} – {resume.end}
              </Typography>
              <Stack direction='row' spacing={1} flexWrap='wrap' sx={{ mb: 1 }}>
                {project.tech.map((t) => (
                  <TechChip key={t} label={t} />
                ))}
              </Stack>
              <Box sx={{ mb: 1.5 }}>
                <BulletList items={resume.bullets} />
              </Box>
              <Stack direction='row' spacing={2}>
                {project.siteUrl && (
                  <Link
                    href={project.siteUrl}
                    target='_blank'
                    rel='noreferrer'
                    sx={linkSx}
                  >
                    View site
                  </Link>
                )}
                <Link
                  href={project.codeUrl}
                  target='_blank'
                  rel='noreferrer'
                  sx={linkSx}
                >
                  View code
                </Link>
              </Stack>
            </CardContent>
          </Card>
        ) : null
      )}
    </Stack>
  </Box>
);

export default ProjectsSection;
