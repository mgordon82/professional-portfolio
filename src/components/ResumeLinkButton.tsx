'use client';

import NextLink from 'next/link';
import { Button } from '@mui/material';

const ResumeLinkButton = () => (
  <Button variant='outlined' component={NextLink} href='/resume'>
    View Resume
  </Button>
);

export default ResumeLinkButton;
