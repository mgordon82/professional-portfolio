import {
  Box,
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
import toDoAppImg from '../assets/images/todo-app.png';
import doggoEDoggoImg from '../assets/images/doggo-e-doggo-site.png';

const Main = () => {
  return (
    <Stack gap={3} padding={5}>
      <Section title='About Me'>
        <Box>
          <Box
            component='img'
            src={avatarImg}
            alt='avatar of Matt Gordon'
            sx={{
              height: 150,
              width: 150,
              float: 'left',
              marginRight: 2,
              marginBottom: 1,
              borderRadius: '30%'
            }}
          />
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
      <Section title='Web Projects'>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ProjectCard
              title='Portfolio Site'
              image={portfolioImg}
              imageAlt='portfolio site preview'
              description='Clean, responsive personal portfolio built with dark mode and custom accent color.'
              codeLink='https://github.com/mgordon82/professional-portfolio'
              viewSiteLink='/'
              languages={['React', 'HTML', 'CSS']}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ProjectCard
              title='Basic To-Do App'
              image={toDoAppImg}
              imageAlt='basic to-do app preview'
              description='A basic react app that builds out a to-do list saving the items in local storage.'
              codeLink='https://github.com/mgordon82/todo-app'
              viewSiteLink='/'
              languages={['React', 'HTML', 'CSS']}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
      <Section title='Contact Me'>
        <List component='nav' sx={{ display: 'flex' }}>
          <ListItem>
            <Link sx={{ color: '#fff' }} href='mailto:jobs@mattrgordon.com'>
              jobs@mattrgordon.com
            </Link>
          </ListItem>
          <ListItem>
            <Link
              sx={{ color: '#fff' }}
              href='https://github.com/mgordon82'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </Link>
          </ListItem>
          <ListItem>
            <Link
              sx={{ color: '#fff' }}
              href='https://linkedin/in/mgordon82'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </Link>
          </ListItem>
        </List>
      </Section>
    </Stack>
  );
};

export default Main;
