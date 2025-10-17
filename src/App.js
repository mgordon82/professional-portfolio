import {
  createTheme,
  CssBaseline,
  Grid,
  Stack,
  ThemeProvider
} from '@mui/material';
import avatarImg from './assets/images/avatar.png';

import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';

import portfolioImg from './assets/images/portfolio-site.png';
import toDoAppImg from './assets/images/todo-app.png';
import doggoEDoggoImg from './assets/images/doggo-e-doggo-site.png';

const App = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#444'
      },
      text: {
        primary: '#fff'
      }
    },
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            color: '#fff',
            borderRadius: 8,
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: '#00bebe',
              color: '#fff'
            },
            '&.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: '#00bebe',
              color: '#fff'
            }
          }
        }
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <Header />
        <Stack gap={3} padding={5}>
          <Section title='About Me'>
            <img height={150} src={avatarImg} alt='avatar of Matt Gordon' />
            <div>
              <p>
                I have been working in the web industry for 20 years as a
                front-end developer. During my career, I have worked in various
                industries ranging from Radio to Healthcare and now, most
                recently, fintech. I expanding my knowledge and experience, as
                well as helping others achieve their goals of becoming a
                developer.
              </p>
              <p>
                Most recently, I received a certification in NodeJS from Zero To
                Mastery.
              </p>
              <p>
                I have spent a long time focused on the look and structure of
                the front-end, however, I would like to tie the whole stack
                together and really get into building applications from the
                ground, up.
              </p>
            </div>
          </Section>
          <Section title='Web Projects'>
            <Grid container spacing={3} alignItems='stretch'>
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard
                  title='Portfolio Site'
                  image={portfolioImg}
                  imageAlt='portfolio site preview'
                  description='Clean, responsive personal portfolio built with dark mode and custom accent color.'
                  codeLink='https://github.com/mgordon82/professional-portfolio'
                  viewSiteLink='/'
                  languages={['HTML', 'CSS']}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <ProjectCard
                  title='Basic To-Do App'
                  image={toDoAppImg}
                  imageAlt='basic to-do app preview'
                  description='A basic react app that builds out a to-do list saving the items in local storage'
                  codeLink='https://github.com/mgordon82/todo-app'
                  viewSiteLink='/'
                  languages={['React', 'HTML', 'CSS']}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
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
            <nav>
              <ul>
                <li>
                  <a href='tel:6178944775'>617.894.4775</a>
                </li>
                <li>
                  <a href='mailto:jobs@mattrgordon.com'>jobs@mattrgordon.com</a>
                </li>
                <li>
                  <a
                    href='https://github.com/mgordon82'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href='https://linkedin/in/mgordon82'
                    target='_blank'
                    rel='noreferrer'
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
          </Section>
        </Stack>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
