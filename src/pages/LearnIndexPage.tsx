import {
  Box,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { navSections } from '../data/navigation';

export default function LearnIndexPage() {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: 860, mx: 'auto', px: { xs: 3, md: 5 }, py: { xs: 5, md: 7 } }}>
      <Typography variant="h1" sx={{ mb: 2, color: theme.palette.text.primary }}>
        학습하기
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 6,
          fontSize: '1.1rem',
          color: theme.palette.text.secondary,
          lineHeight: 1.8,
        }}
      >
        React를 처음부터 배워보세요. 이 레퍼런스는 공식 문서를 기반으로 학습한 내용을 단계별로 정리했습니다.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {navSections.map((section, idx) => (
          <Box key={section.title}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Typography sx={{ color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>
                  {idx + 1}
                </Typography>
              </Box>
              <Typography variant="h2" sx={{ fontSize: '1.4rem', color: theme.palette.text.primary }}>
                {section.title}
              </Typography>
            </Box>

            <Grid container spacing={1.5}>
              {section.items.map((item) => (
                <Grid size={{ xs: 12, sm: 6 }} key={item.path}>
                  <Box
                    component={Link}
                    to={item.path}
                    sx={{
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      p: 2,
                      borderRadius: '10px',
                      border: `1px solid ${theme.palette.divider}`,
                      backgroundColor: theme.palette.background.paper,
                      color: theme.palette.text.primary,
                      transition: 'all 0.15s',
                      '&:hover': {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: `${theme.palette.primary.main}08`,
                        transform: 'translateY(-1px)',
                        boxShadow: `0 4px 12px ${theme.palette.primary.main}22`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        flexShrink: 0,
                      }}
                    />
                    <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.4 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
