import React, { useState } from 'react';
import {
  Box,
  Chip,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Link,
  Divider,
  IconButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { resumeData } from '../assets/data/resumeData';

const Resume = () => {
  const [techFilter, setTechFilter] = useState(null);
  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleTechClick = (tech) => {
    setTechFilter((current) => (current === tech ? null : tech));
  };

  const filteredExperience = techFilter
    ? resumeData.experience.filter((exp) => exp.tech.includes(techFilter))
    : resumeData.experience;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#050608',
        color: '#fff',
        py: 6
      }}
    >
      <Box maxWidth='lg' sx={{ mx: 'auto', px: 2 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant='h3' sx={{ fontWeight: 700 }}>
            {resumeData.name}
            {resumeData.pronouns && (
              <Typography
                component='span'
                variant='h6'
                sx={{ ml: 1, fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}
              >
                ({resumeData.pronouns})
              </Typography>
            )}
          </Typography>
          <Typography variant='h5' sx={{ color: '#00bebe', mb: 1 }}>
            {resumeData.title}
          </Typography>
          <Typography variant='body2' sx={{ color: 'rgba(255,255,255,0.7)' }}>
            {resumeData.contact.location} ·{' '}
            <Link
              href={`mailto:${resumeData.contact.email}`}
              sx={{ color: '#00bebe' }}
            >
              {resumeData.contact.email}
            </Link>
          </Typography>

          <Stack direction='row' spacing={2} sx={{ mt: 1, flexWrap: 'wrap' }}>
            {resumeData.links.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                target='_blank'
                rel='noreferrer'
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  borderBottom: '1px solid transparent',
                  '&:hover': {
                    color: '#00bebe',
                    borderBottom: '1px solid #00bebe'
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                bgcolor: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                mb: 3
              }}
            >
              <CardContent>
                <Typography variant='h6' sx={{ mb: 1.5 }}>
                  Summary
                </Typography>
                <Box component='ul' sx={{ pl: 3, m: 0 }}>
                  {resumeData.profile.map((line, i) => (
                    <Typography
                      key={i}
                      component='li'
                      variant='body2'
                      sx={{ color: 'rgba(255,255,255,0.8)', mb: 0.5 }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>

            <Card
              sx={{
                bgcolor: '#111',
                border: '1px solid rgba(255,255,255,0.06)'
              }}
            >
              <CardContent>
                <Typography variant='h6' sx={{ mb: 1.5 }}>
                  Key Skills
                </Typography>

                <Typography
                  variant='subtitle2'
                  sx={{ mb: 1, color: '#00bebe' }}
                >
                  Highlights
                </Typography>
                <Box component='ul' sx={{ pl: 3, m: 0, mb: 2 }}>
                  {resumeData.skills.highlights.map((item, i) => (
                    <Typography
                      key={i}
                      component='li'
                      variant='body2'
                      sx={{ color: 'rgba(255,255,255,0.8)', mb: 0.5 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>

                <Divider
                  sx={{ borderColor: 'rgba(255,255,255,0.12)', my: 2 }}
                />

                <Typography variant='subtitle2' sx={{ mb: 1 }}>
                  Technology
                </Typography>
                <Stack direction='row' spacing={1} flexWrap='wrap'>
                  {resumeData.skills.technology.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size='small'
                      onClick={() => handleTechClick(skill)}
                      sx={{
                        mb: 1,
                        cursor: 'pointer',
                        border:
                          techFilter === skill
                            ? '1px solid #00bebe'
                            : '1px solid transparent',
                        bgcolor:
                          techFilter === skill
                            ? 'rgba(0,190,190,0.15)'
                            : '#1a1a1a',
                        color: '#fff',
                        '&:hover': {
                          bgcolor: 'rgba(0,190,190,0.25)'
                        }
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant='h5' sx={{ mb: 2 }}>
                Experience
              </Typography>

              {techFilter && (
                <Typography
                  variant='body2'
                  sx={{
                    mb: 1.5,
                    color: 'rgba(255,255,255,0.8)'
                  }}
                >
                  Filtering roles by tech: <strong>{techFilter}</strong>{' '}
                  <Box
                    component='button'
                    onClick={() => setTechFilter(null)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#00bebe',
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
                {filteredExperience.map((exp, idx) => {
                  const key = `${exp.company}-${idx}`;
                  const isOpen = expanded[key] ?? false;

                  return (
                    <Card
                      key={key}
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
                          backgroundColor: '#00bebe'
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
                              variant='subtitle1'
                              sx={{ fontWeight: 600 }}
                            >
                              {exp.role}
                            </Typography>
                            <Typography
                              variant='body2'
                              sx={{ color: 'rgba(255,255,255,0.7)' }}
                            >
                              {exp.company} · {exp.location}
                            </Typography>
                            <Typography
                              variant='body2'
                              sx={{ color: 'rgba(255,255,255,0.5)' }}
                            >
                              {exp.start} – {exp.end}
                            </Typography>
                          </Box>
                          <IconButton
                            size='small'
                            onClick={() => toggleExpanded(key)}
                            sx={{ color: '#00bebe' }}
                            aria-label={
                              isOpen ? 'Collapse details' : 'Expand details'
                            }
                          >
                            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                          </IconButton>
                        </Stack>

                        <Stack
                          direction='row'
                          spacing={1}
                          flexWrap='wrap'
                          sx={{ mb: 1.5 }}
                        >
                          {exp.tech.map((t) => (
                            <Chip
                              key={t}
                              label={t}
                              size='small'
                              onClick={() => handleTechClick(t)}
                              sx={{
                                mb: 1,
                                cursor: 'pointer',
                                bgcolor:
                                  techFilter === t
                                    ? 'rgba(0,190,190,0.2)'
                                    : '#1a1a1a',
                                color: '#fff',
                                border:
                                  techFilter === t
                                    ? '1px solid #00bebe'
                                    : '1px solid transparent'
                              }}
                            />
                          ))}
                        </Stack>

                        {isOpen && (
                          <Box component='ul' sx={{ pl: 3, m: 0 }}>
                            {exp.bullets.map((bullet, i) => (
                              <Typography
                                key={i}
                                component='li'
                                variant='body2'
                                sx={{
                                  color: 'rgba(255,255,255,0.85)',
                                  mb: 0.5
                                }}
                              >
                                {bullet}
                              </Typography>
                            ))}
                          </Box>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </Stack>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant='h5' sx={{ mb: 2 }}>
                Selected Projects
              </Typography>
              <Stack spacing={2}>
                {resumeData.projects.map((project) => (
                  <Card
                    key={project.name}
                    sx={{
                      bgcolor: '#111',
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}
                  >
                    <CardContent>
                      <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                        {project.name}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{ color: 'rgba(255,255,255,0.8)', mb: 1 }}
                      >
                        {project.description}
                      </Typography>
                      <Stack
                        direction='row'
                        spacing={1}
                        flexWrap='wrap'
                        sx={{ mb: 1 }}
                      >
                        {project.tech.map((t) => (
                          <Chip
                            key={t}
                            label={t}
                            size='small'
                            sx={{
                              mb: 1,
                              bgcolor: '#1a1a1a',
                              color: '#fff'
                            }}
                          />
                        ))}
                      </Stack>
                      <Stack direction='row' spacing={2}>
                        {project.link && (
                          <Link
                            href={project.link}
                            target='_blank'
                            rel='noreferrer'
                            sx={{ color: '#00bebe', fontSize: '0.9rem' }}
                          >
                            View site
                          </Link>
                        )}
                        {project.code && (
                          <Link
                            href={project.code}
                            target='_blank'
                            rel='noreferrer'
                            sx={{ color: '#00bebe', fontSize: '0.9rem' }}
                          >
                            View code
                          </Link>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant='h5' sx={{ mb: 2 }}>
                Education & Certifications
              </Typography>
              <Stack spacing={1.5}>
                {resumeData.education.map((edu) => (
                  <Box key={edu.school}>
                    <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                      {edu.credential}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'rgba(255,255,255,0.8)' }}
                    >
                      {edu.school}
                      {edu.location ? ` · ${edu.location}` : ''} · {edu.year}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Resume;
