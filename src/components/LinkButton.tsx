'use client';

import type { ReactNode } from 'react';
import NextLink from 'next/link';
import { Button } from '@mui/material';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'contained' | 'outlined';
}

const LinkButton = ({
  href,
  children,
  variant = 'outlined'
}: LinkButtonProps) => (
  <Button variant={variant} component={NextLink} href={href}>
    {children}
  </Button>
);

export default LinkButton;
