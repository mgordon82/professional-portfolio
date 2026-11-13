import { Box, Typography } from '@mui/material';

interface BulletListProps {
  items: string[];
  color?: string;
  mb?: number;
}

const BulletList = ({
  items,
  color = 'rgba(255,255,255,0.8)',
  mb = 0
}: BulletListProps) => (
  <Box component='ul' sx={{ pl: 3, m: 0, mb }}>
    {items.map((item, i) => (
      <Typography
        key={i}
        component='li'
        variant='body2'
        sx={{ color, mb: 0.5 }}
      >
        {item.trim()}
      </Typography>
    ))}
  </Box>
);

export default BulletList;
