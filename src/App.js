import { createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import avatarImg from './assets/images/avatar.png';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';

const App = () => {
  const theme = createTheme({
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
            <article>
              <a
                href='https://mgordon82.github.io/horiseon-refactor/'
                target='_blank'
                rel='noreferrer'
              >
                <div>
                  <h3>Horiseon Refactor</h3>
                  <h4>Basic HTML/CSS</h4>
                </div>
              </a>
            </article>
            <article>
              <a
                href='https://github.com/mgordon82/professional-portfolio'
                target='_blank'
                rel='noreferrer'
              >
                <div>
                  <h3>Portfolio</h3>
                  <h4>Advanced HTML/CSS</h4>
                </div>
              </a>
            </article>
            <article>
              <a
                href='https://github.com/mgordon82/todo-app'
                target='_blank'
                rel='noreferrer'
              >
                <div>
                  <h3>Basic To-do App</h3>
                  <h4>ReactJS/HTML/CSS</h4>
                </div>
              </a>
            </article>
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
