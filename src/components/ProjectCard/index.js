import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Stack,
  Typography
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = ({
  title,
  image,
  imageAlt,
  description,
  viewSiteLink,
  codeLink,
  languages
}) => {
  const GUTTER = 2.5;

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        // display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        ':hover img': { transform: 'scale(1.03)', filter: 'brightness(1.05)' }
      }}
    >
      <CardMedia
        component='img'
        image={image}
        alt={imageAlt}
        sx={{
          height: 220,
          objectFit: 'cover',
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
          <Typography variant='h6' sx={{ fontWeight: 700, lineHeight: 1.2 }}>
            {title}
          </Typography>
          {!!languages?.length && (
            <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
              {languages.map((lang) => (
                <Chip
                  key={lang}
                  size='small'
                  label={lang}
                  variant='outlined'
                  sx={{ color: '#00bebe', borderColor: '#00bebe' }}
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
            <Button
              variant='contained'
              size='small'
              startIcon={<OpenInNewIcon />}
              href={viewSiteLink}
              target='_blank'
              rel='noopener'
            >
              View site
            </Button>
            <Button
              variant='outlined'
              size='small'
              startIcon={<GitHubIcon />}
              href={codeLink}
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
