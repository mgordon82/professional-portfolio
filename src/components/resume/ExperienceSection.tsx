'use client';

import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Collapse,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { colors } from '../../theme/colors';
import BulletList from './BulletList';
import TechChip from './TechChip';
import type { Experience } from './types';

interface ExperienceCardProps {
  exp: Experience;
  techFilter: string | null;
  onTechClick: (tech: string) => void;
}

const ExperienceCard = ({
  exp,
  techFilter,
  onTechClick
}: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `exp-${exp.company.replace(/\W+/g, '-')}-${exp.start.replace(/\W+/g, '-')}`;

  return (
    <Card
      sx={{
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 12,
          bottom: 12,
          width: '4px',
          borderRadius: '4px',
          backgroundColor: colors.accent
        }
      }}
    >
      <CardContent>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ mb: 1 }}
        >
          <Box>
            <Typography
              component='h3'
              variant='subtitle1'
              sx={{ fontWeight: 600 }}
            >
              {exp.role}
            </Typography>
            <Typography variant='body2' sx={{ color: colors.textMuted }}>
              {exp.company} · {exp.location}
            </Typography>
            <Typography variant='body2' sx={{ color: 'rgba(255,255,255,0.5)' }}>
              {exp.start.trim()} – {exp.end.trim()}
            </Typography>
          </Box>
          <IconButton
            size='small'
            onClick={() => setIsOpen((open) => !open)}
            sx={{ color: colors.accent }}
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-label={isOpen ? 'Collapse details' : 'Expand details'}
          >
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Stack>

        <Typography
          variant='body2'
          sx={{ color: colors.textSoft, mb: 1.5, fontStyle: 'italic' }}
        >
          {exp.summary}
        </Typography>

        <Stack direction='row' spacing={1} flexWrap='wrap' sx={{ mb: 1.5 }}>
          {exp.tech.map((t) => (
            <TechChip
              key={t}
              label={t}
              active={techFilter === t}
              onClick={() => onTechClick(t)}
            />
          ))}
        </Stack>

        {/* Always rendered so the text is in the page HTML for crawlers. */}
        <Collapse in={isOpen} id={panelId}>
          <BulletList items={exp.bullets} color='rgba(255,255,255,0.85)' />
        </Collapse>
      </CardContent>
    </Card>
  );
};

interface ExperienceSectionProps {
  experience: Experience[];
  techFilter: string | null;
  onTechClick: (tech: string) => void;
  onClearFilter: () => void;
}

const ExperienceSection = ({
  experience,
  techFilter,
  onTechClick,
  onClearFilter
}: ExperienceSectionProps) => (
  <Box sx={{ mb: 4 }}>
    <Typography component='h2' variant='h5' sx={{ mb: 2 }}>
      Experience
    </Typography>

    {techFilter && (
      <Typography variant='body2' sx={{ mb: 1.5, color: colors.textSoft }}>
        Filtering roles by tech: <strong>{techFilter}</strong>{' '}
        <Box
          component='button'
          onClick={onClearFilter}
          style={{
            background: 'none',
            border: 'none',
            color: colors.accent,
            cursor: 'pointer',
            padding: 0,
            marginLeft: 4
          }}
        >
          (clear)
        </Box>
      </Typography>
    )}

    <Stack spacing={2}>
      {experience.map((exp) => (
        <ExperienceCard
          key={`${exp.company}-${exp.start}`}
          exp={exp}
          techFilter={techFilter}
          onTechClick={onTechClick}
        />
      ))}
    </Stack>
  </Box>
);

export default ExperienceSection;
