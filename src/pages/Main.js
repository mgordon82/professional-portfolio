import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Stack,
  Typography
} from '@mui/material';
import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

import avatarImg from '../assets/images/avatar.png';
import portfolioImg from '../assets/images/portfolio-site.png';
import doggoEDoggoImg from '../assets/images/doggo-e-doggo-site.png';
import MiPTImage from '../assets/images/MiPT.png';

const Main = () => {
  return (
    <Stack
      gap={3}
      sx={{
        minHeight: '100vh',
        bgcolor: '#050608',
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
                color: '#00bebe',
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
              Senior Frontend Software Engineer
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

              <Button variant='outlined' href='/resume'>
                View Resume
              </Button>
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
              component='img'
              src={avatarImg}
              alt='Matt Gordon'
              sx={{
                height: { xs: 150, md: 200 },
                width: { xs: 150, md: 200 },
                objectFit: 'cover',
                padding: 0.5,
                border: '2px solid transparent',
                background:
                  'linear-gradient(135deg, #00bebe, #008c8c) border-box',
                borderRadius: '50%'
              }}
            />
          </Box>
        </Box>
      </Box>
      <Section title='About Me'>
        <Box>
          <Typography mb={2}>
            I&apos;ve spent the past 20 years building for the web as a
            front-end engineer, working across industries including radio,
            healthcare, and most recently FinTech. Over that time, I&apos;ve
            developed a strong foundation in creating accessible, user-centered,
            and maintainable interfaces, and I&apos;ve also had the opportunity
            to mentor and support others pursuing a path into development.
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
            <Grid size={{ xs: 12 }}>
              <ProjectCard
                title='MiPT'
                image={MiPTImage}
                imageAlt='MiPT fitness and nutrition application dashboard'
                description='Full-stack fitness and nutrition platform for trainers and clients, featuring secure role-based access, progress tracking, nutrition tools, and AI-powered insights.'
                codeLink='https://github.com/mgordon82/chapter-two-api'
                viewSiteLink='https://chapter-two-ui.netlify.app/'
                languages={[
                  'React',
                  'TypeScript',
                  'Redux Toolkit',
                  'Redux Observable',
                  'MUI',
                  'Node.js',
                  'Express',
                  'MongoDB',
                  'AWS Cognito',
                  'OpenAI'
                ]}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ProjectCard
                title='Portfolio Site'
                image={portfolioImg}
                imageAlt='portfolio site preview'
                description='Clean, responsive personal portfolio built with dark mode and custom accent color.'
                codeLink='https://github.com/mgordon82/professional-portfolio'
                languages={['React', 'HTML', 'CSS']}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ProjectCard
                title='Doggo-e-Doggo React App'
                image={doggoEDoggoImg}
                imageAlt='doggo-e-doggo react app preview'
                description='A react app that connects to a database of dogs, does basic auth and looks up available dogs for adoption. This was built for a coding challenge.'
                codeLink='https://github.com/mgordon82/doggo-e-doggo'
                viewSiteLink='https://doggo-e-doggo.netlify.app'
                languages={['React', 'HTML', 'CSS']}
              />
            </Grid>
          </Grid>
        </Section>
      </Box>
      <Section title='Contact Me'>
        <List
          component='nav'
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            p: 0,
            m: 0
          }}
        >
          <ListItem disableGutters disablePadding>
            <Link
              href='https://www.linkedin.com/in/mgordon82'
              target='_blank'
              rel='noreferrer'
              sx={{
                color: '#fff',
                textDecoration: 'none',
                textTransform: 'none',
                fontWeight: 400,
                borderBottom: '2px solid transparent',
                transition: 'all .2s ease',
                px: 1,
                py: 0.5,
                '&:hover': {
                  borderBottom: '2px solid #00bebe',
                  color: '#00bebe'
                },
                '&:focus-visible': {
                  outline: '2px solid #00bebe',
                  outlineOffset: '3px',
                  borderRadius: '2px'
                }
              }}
            >
              LinkedIn
            </Link>
          </ListItem>
          <ListItem disableGutters disablePadding>
            <Link
              href='https://github.com/mgordon82'
              target='_blank'
              rel='noreferrer'
              sx={{
                color: '#fff',
                textDecoration: 'none',
                textTransform: 'none',
                fontWeight: 400,
                borderBottom: '2px solid transparent',
                transition: 'all .2s ease',
                px: 1,
                py: 0.5,
                '&:hover': {
                  borderBottom: '2px solid #00bebe',
                  color: '#00bebe'
                },
                '&:focus-visible': {
                  outline: '2px solid #00bebe',
                  outlineOffset: '3px',
                  borderRadius: '2px'
                }
              }}
            >
              Github
            </Link>
          </ListItem>

          <ListItem disableGutters disablePadding>
            <Link
              href='mailto:jobs@mattrgordon.com'
              sx={{
                color: '#fff',
                textDecoration: 'none',
                textTransform: 'none',
                fontWeight: 400,
                borderBottom: '2px solid transparent',
                transition: 'all .2s ease',
                px: 1,
                py: 0.5,
                '&:hover': {
                  borderBottom: '2px solid #00bebe',
                  color: '#00bebe'
                },
                '&:focus-visible': {
                  outline: '2px solid #00bebe',
                  outlineOffset: '3px',
                  borderRadius: '2px'
                }
              }}
            >
              jobs@mattrgordon.com
            </Link>
          </ListItem>
        </List>
      </Section>
    </Stack>
  );
};

export default Main;
