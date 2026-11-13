import React from 'react';
import Image from 'next/image';

import { Box, Button, Card, Chip, Stack, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import type { Project } from '../../data/projects';
import { colors } from '../../theme/colors';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, image, imageAlt, description, siteUrl, codeUrl, tech } =
    project;
  const GUTTER = 2.5;

  return (
    <Card
      sx={{
        height: '100%',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        ':hover img': { transform: 'scale(1.03)', filter: 'brightness(1.05)' }
      }}
    >
      <Box
        component={Image}
        src={image}
        alt={imageAlt}
        sx={{
          height: 220,
          objectFit: 'cover',
          objectPosition: 'top',
          transition: 'transform .3s ease, filter .3s ease',
          display: 'block',
          width: '100%'
        }}
      />

      <Box
        sx={{
          px: GUTTER,
          pt: 3,
          pb: 2,
          display: 'flex',
          gap: 3,
          flexGrow: 1,
          alignItems: 'stretch',
          flexWrap: { xs: 'wrap', sm: 'nowrap' }
        }}
      >
        <Stack
          spacing={1}
          sx={{
            flex: { xs: '1 1 100%', sm: '0 0 38%' },
            minWidth: 0
          }}
        >
          <Typography
            component='h3'
            variant='h6'
            sx={{ fontWeight: 700, lineHeight: 1.2 }}
          >
            {name}
          </Typography>
          {!!tech.length && (
            <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
              {tech.map((lang) => (
                <Chip
                  key={lang}
                  size='small'
                  label={lang}
                  variant='outlined'
                  sx={{ color: colors.accent, borderColor: colors.accent }}
                />
              ))}
            </Stack>
          )}
        </Stack>

        <Stack spacing={1.5}>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              overflow: 'hidden'
            }}
          >
            {description}
          </Typography>

          <Stack direction='row' spacing={1.5} sx={{ mt: 'auto' }}>
            {siteUrl && (
              <Button
                variant='contained'
                size='small'
                startIcon={<OpenInNewIcon />}
                href={siteUrl}
                target='_blank'
                rel='noopener'
              >
                View site
              </Button>
            )}
            <Button
              variant='outlined'
              size='small'
              startIcon={<GitHubIcon />}
              href={codeUrl}
              target='_blank'
              rel='noopener'
            >
              Code
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

export default ProjectCard;
