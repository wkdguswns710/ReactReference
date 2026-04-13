import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Divider,
  Link as MuiLink,
  Typography,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useLocation } from 'react-router-dom';
import { navSections } from '../../data/navigation';

interface DocPageProps {
  title: string;
  description?: string;
  badge?: string;
  children: React.ReactNode;
}

function usePrevNext() {
  const location = useLocation();
  const allItems = navSections.flatMap((s) => s.items);
  const currentIndex = allItems.findIndex((item) => item.path === location.pathname);

  const prev = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const next = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  return { prev, next };
}

function useCurrentSection() {
  const location = useLocation();
  return navSections.find((s) => s.items.some((item) => item.path === location.pathname));
}

export default function DocPage({ title, description, badge, children }: DocPageProps) {
  const theme = useTheme();
  const { prev, next } = usePrevNext();
  const currentSection = useCurrentSection();

  return (
    <Box
      sx={{
        maxWidth: 860,
        mx: 'auto',
        px: { xs: 3, md: 5 },
        py: { xs: 5, md: 7 },
      }}
    >
      {/* Breadcrumb */}
      {currentSection && (
        <Breadcrumbs sx={{ mb: 3 }} aria-label="breadcrumb">
          <MuiLink
            component={Link}
            to="/learn"
            underline="hover"
            sx={{ fontSize: '0.85rem', color: theme.palette.text.secondary }}
          >
            학습하기
          </MuiLink>
          <Typography sx={{ fontSize: '0.85rem', color: theme.palette.text.secondary }}>
            {currentSection.title}
          </Typography>
        </Breadcrumbs>
      )}

      {/* Badge */}
      {badge && (
        <Chip
          label={badge}
          size="small"
          sx={{
            mb: 2,
            backgroundColor: `${theme.palette.primary.main}18`,
            color: theme.palette.primary.main,
            fontWeight: 600,
            fontSize: '0.78rem',
          }}
        />
      )}

      {/* Title */}
      <Typography
        variant="h1"
        sx={{
          mb: description ? 2 : 4,
          fontSize: { xs: '1.875rem', md: '2.5rem' },
          color: theme.palette.text.primary,
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      {description && (
        <Typography
          variant="body1"
          sx={{
            mb: 5,
            fontSize: '1.1rem',
            color: theme.palette.text.secondary,
            lineHeight: 1.8,
            borderLeft: `3px solid ${theme.palette.primary.main}`,
            pl: 2,
          }}
        >
          {description}
        </Typography>
      )}

      {/* Content */}
      <Box
        sx={{
          '& h2': {
            ...theme.typography.h2,
            mt: 6,
            mb: 2,
            color: theme.palette.text.primary,
            scrollMarginTop: '80px',
          },
          '& h3': {
            ...theme.typography.h3,
            mt: 4,
            mb: 1.5,
            color: theme.palette.text.primary,
            scrollMarginTop: '80px',
          },
          '& p': {
            ...theme.typography.body1,
            mb: 2,
          },
          '& ul, & ol': {
            pl: 3,
            mb: 2,
            '& li': {
              ...theme.typography.body1,
              mb: 0.75,
            },
          },
          '& a': {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            fontWeight: 500,
            '&:hover': { textDecoration: 'underline' },
          },
          '& code': {
            fontFamily: '"Fira Code", "Source Code Pro", monospace',
            fontSize: '0.875em',
            backgroundColor: theme.palette.mode === 'dark' ? '#2D3038' : '#EEF0F3',
            color: theme.palette.mode === 'dark' ? '#E2C07D' : '#B0533B',
            px: 0.75,
            py: 0.25,
            borderRadius: '4px',
          },
          '& hr': {
            border: 'none',
            borderTop: `1px solid ${theme.palette.divider}`,
            my: 4,
          },
          '& blockquote': {
            borderLeft: `4px solid ${theme.palette.divider}`,
            pl: 2,
            ml: 0,
            color: theme.palette.text.secondary,
            fontStyle: 'italic',
          },
          '& strong': {
            fontWeight: 700,
            color: theme.palette.text.primary,
          },
        }}
      >
        {children}
      </Box>

      {/* Prev / Next navigation */}
      <Divider sx={{ mt: 8, mb: 4 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        {prev ? (
          <Button
            component={Link}
            to={prev.path}
            startIcon={<ArrowBackIcon />}
            variant="outlined"
            sx={{
              borderColor: theme.palette.divider,
              color: theme.palette.text.primary,
              textAlign: 'left',
              py: 1.5,
              px: 2.5,
              borderRadius: '10px',
              maxWidth: '45%',
              '&:hover': {
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
              },
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary, mb: 0.25 }}>
                이전
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 600 }}>{prev.title}</Typography>
            </Box>
          </Button>
        ) : (
          <Box />
        )}

        {next ? (
          <Button
            component={Link}
            to={next.path}
            endIcon={<ArrowForwardIcon />}
            variant="outlined"
            sx={{
              borderColor: theme.palette.divider,
              color: theme.palette.text.primary,
              textAlign: 'right',
              py: 1.5,
              px: 2.5,
              borderRadius: '10px',
              maxWidth: '45%',
              ml: 'auto',
              '&:hover': {
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
              },
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '0.7rem', color: theme.palette.text.secondary, mb: 0.25 }}>
                다음
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 600 }}>{next.title}</Typography>
            </Box>
          </Button>
        ) : (
          <Box />
        )}
      </Box>
    </Box>
  );
}
