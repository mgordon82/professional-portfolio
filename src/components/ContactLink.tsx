import { Link } from '@mui/material';
import type { ReactNode } from 'react';
import { colors } from '../theme/colors';

interface ContactLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
}

const ContactLink = ({
  href,
  children,
  external = false
}: ContactLinkProps) => (
  <Link
    href={href}
    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
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
        borderBottom: `2px solid ${colors.accent}`,
        color: colors.accent
      },
      '&:focus-visible': {
        outline: `2px solid ${colors.accent}`,
        outlineOffset: '3px',
        borderRadius: '2px'
      }
    }}
  >
    {children}
  </Link>
);

export default ContactLink;
