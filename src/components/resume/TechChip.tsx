import { Chip } from '@mui/material';
import { colors } from '../../theme/colors';

interface TechChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const TechChip = ({ label, active = false, onClick }: TechChipProps) => (
  <Chip
    label={label}
    size='small'
    onClick={onClick}
    sx={{
      mb: 1,
      cursor: onClick ? 'pointer' : 'default',
      color: '#fff',
      border: active ? `1px solid ${colors.accent}` : '1px solid transparent',
      bgcolor: active ? colors.accentTint : colors.chipBg,
      ...(onClick && { '&:hover': { bgcolor: 'rgba(0,190,190,0.25)' } })
    }}
  />
);

export default TechChip;
