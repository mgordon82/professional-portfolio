import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import ThemeRegistry from '../components/ThemeRegistry';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL } from '../lib/site';
import { resumeData } from '../data/resumeData';

const title = 'Matt Gordon | Senior Software Engineer';
const description =
  'Senior software engineer specializing in React, TypeScript, frontend architecture, accessibility, and scalable web applications.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: '%s | Matt Gordon' },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Matt Gordon',
    title,
    description
  },
  twitter: { card: 'summary_large_image', title, description },
  manifest: '/site.webmanifest'
};

export const viewport: Viewport = { themeColor: '#050608' };

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Matt Gordon',
  jobTitle: 'Senior Software Engineer',
  url: SITE_URL,
  email: 'jobs@mattrgordon.com',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'MN',
    addressCountry: 'US'
  },
  knowsAbout: [
    'React',
    'TypeScript',
    'Node.js',
    'Accessibility',
    'UI architecture'
  ],
  sameAs: resumeData.links.map((link) => link.url)
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <body>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ThemeRegistry>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          <Header />
          <Box component='main' sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          <Footer />
        </Container>
      </ThemeRegistry>
    </body>
  </html>
);

export default RootLayout;
