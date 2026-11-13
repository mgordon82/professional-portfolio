'use client';

import { useState } from 'react';
import { Box, Grid } from '@mui/material';

import { resumeData } from '../../data/resumeData';
import { colors } from '../../theme/colors';
import ResumeHeader from '../../components/resume/ResumeHeader';
import { SummaryCard, SkillsCard } from '../../components/resume/SidebarCards';
import ExperienceSection from '../../components/resume/ExperienceSection';
import ProjectsSection from '../../components/resume/ProjectsSection';
import EducationSection from '../../components/resume/EducationSection';

const filterableTech = new Set(
  resumeData.experience.flatMap((exp) => exp.tech)
);

const ResumeContent = () => {
  const [techFilter, setTechFilter] = useState<string | null>(null);

  const handleTechClick = (tech: string) => {
    setTechFilter((current) => (current === tech ? null : tech));
  };

  const filteredExperience = techFilter
    ? resumeData.experience.filter((exp) => exp.tech.includes(techFilter))
    : resumeData.experience;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: colors.pageBg,
        color: '#fff',
        py: 6
      }}
    >
      <Box maxWidth='lg' sx={{ mx: 'auto', px: 2 }}>
        <ResumeHeader />

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <SummaryCard />
            <SkillsCard
              techFilter={techFilter}
              filterableTech={filterableTech}
              onTechClick={handleTechClick}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <ExperienceSection
              experience={filteredExperience}
              techFilter={techFilter}
              onTechClick={handleTechClick}
              onClearFilter={() => setTechFilter(null)}
            />
            <ProjectsSection />
            <EducationSection />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ResumeContent;
