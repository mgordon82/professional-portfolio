import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Stack,
  Typography
} from '@mui/material';
import Image from 'next/image';
import ContactLink from '../components/ContactLink';
import ResumeLinkButton from '../components/ResumeLinkButton';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { resumeData } from '../data/resumeData';
import { colors } from '../theme/colors';

import avatarImg from '../assets/images/avatar.webp';

const Home = () => {
  return (
    <Stack
      gap={3}
      sx={{
        minHeight: '100vh',
        bgcolor: colors.pageBg,
        color: '#fff',
        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 3, md: 6 }
      }}
    >
      <Box
        component='section'
        sx={{
          p: { xs: 3, md: 5 },
          my: { xs: 2, md: 4 },
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
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'minmax(0, 1fr) 220px'
            },
            gap: { xs: 4, md: 6 },
            alignItems: 'center'
          }}
        >
          <Stack spacing={2.5}>
            <Typography
              variant='body2'
              sx={{
                color: colors.accent,
                fontWeight: 600,
                letterSpacing: 0.5
              }}
            >
              React · TypeScript · UI Architecture · Full-Stack Development
            </Typography>

            <Typography
              component='h1'
              variant='h2'
              sx={{
                fontWeight: 700,
                lineHeight: 1.1,
                maxWidth: 850
              }}
            >
              Senior Software Engineer
            </Typography>

            <Typography
              variant='h5'
              color='text.secondary'
              sx={{
                lineHeight: 1.5,
                maxWidth: 850
              }}
            >
              I build scalable, accessible React applications and complex
              product experiences, with a focus on clean architecture,
              thoughtful UI, and maintainable frontend systems.
            </Typography>

            <Stack direction='row' spacing={2} useFlexGap flexWrap='wrap'>
              <Button variant='contained' href='#projects'>
                View My Work
              </Button>

              <ResumeLinkButton />
            </Stack>
          </Stack>

          <Box
            sx={{
              display: 'flex',
              justifyContent: {
                xs: 'flex-start',
                md: 'center'
              }
            }}
          >
            <Box
              component={Image}
              src={avatarImg}
              alt='Matt Gordon'
              priority
              sx={{
                height: { xs: 150, md: 200 },
                width: { xs: 150, md: 200 },
                objectFit: 'cover',
                padding: 0.5,
                border: '2px solid transparent',
                background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentDark}) border-box`,
                borderRadius: '50%'
              }}
            />
          </Box>
        </Box>
      </Box>
      <Section title='About Me'>
        <Box>
          <Typography mb={2}>
            I&apos;ve spent 20+ years building for the web, including 12+ years
            as a professional software engineer working in React, across
            industries including radio, healthcare, education, and most recently
            FinTech. Over that time, I&apos;ve developed a strong foundation in
            creating accessible, user-centered, and maintainable interfaces, and
            I&apos;ve also had the opportunity to mentor and support others
            pursuing a path into development.
          </Typography>

          <Typography>
            I recently earned a Node.js certification through Zero To Mastery,
            which has accelerated my move toward full-stack engineering. While
            front-end architecture, design systems, and clean UI implementation
            have been my primary focus, I&apos;m increasingly driven to build
            applications end-to-end and bring the entire stack together, from
            the client experience to the underlying services that power it.
          </Typography>
        </Box>
      </Section>

      <Box
        id='projects'
        sx={{
          scrollMarginTop: 24
        }}
      >
        <Section title='Web Projects'>
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid
                key={project.name}
                size={{ xs: 12, sm: index === 0 ? 12 : 6 }}
              >
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Section>
      </Box>
      <Section title='Contact Me'>
        <List
          component='nav'
          aria-label='Contact links'
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
            p: 0,
            m: 0
          }}
        >
          {resumeData.links.map((link) => (
            <ListItem
              key={link.label}
              disableGutters
              disablePadding
              sx={{ width: 'auto' }}
            >
              <ContactLink href={link.url} external>
                {link.label}
              </ContactLink>
            </ListItem>
          ))}
          <ListItem disableGutters disablePadding sx={{ width: 'auto' }}>
            <ContactLink href={`mailto:${resumeData.contact.email}`}>
              {resumeData.contact.email}
            </ContactLink>
          </ListItem>
        </List>
      </Section>
    </Stack>
  );
};

export default Home;
