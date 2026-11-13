import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography
} from '@mui/material';
import { resumeData } from '../../data/resumeData';
import { colors } from '../../theme/colors';
import TechChip from './TechChip';

const cardSx = { bgcolor: colors.cardBg, border: `1px solid ${colors.border}` };

export const SummaryCard = () => (
  <Card sx={{ ...cardSx, mb: 3 }}>
    <CardContent>
      <Typography component='h2' variant='h6' sx={{ mb: 1.5 }}>
        Summary
      </Typography>
      <Stack spacing={1.5}>
        {resumeData.summary.map((paragraph) => (
          <Typography
            key={paragraph}
            variant='body2'
            sx={{ color: colors.textSoft }}
          >
            {paragraph}
          </Typography>
        ))}
      </Stack>
    </CardContent>
  </Card>
);

interface SkillsCardProps {
  techFilter: string | null;
  filterableTech: Set<string>;
  onTechClick: (tech: string) => void;
}

export const SkillsCard = ({
  techFilter,
  filterableTech,
  onTechClick
}: SkillsCardProps) => (
  <Card sx={cardSx}>
    <CardContent>
      <Typography component='h2' variant='h6' sx={{ mb: 1.5 }}>
        Key Skills
      </Typography>

      {resumeData.skills.map((group, index) => (
        <Box key={group.name}>
          {index > 0 && (
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)', my: 1.5 }} />
          )}
          <Typography
            component='h3'
            variant='subtitle2'
            sx={{ mb: 1, color: colors.accent }}
          >
            {group.name}
          </Typography>
          <Stack direction='row' spacing={1} flexWrap='wrap'>
            {group.items.map((skill) => (
              <TechChip
                key={skill}
                label={skill}
                active={techFilter === skill}
                onClick={
                  filterableTech.has(skill)
                    ? () => onTechClick(skill)
                    : undefined
                }
              />
            ))}
          </Stack>
        </Box>
      ))}
    </CardContent>
  </Card>
);
