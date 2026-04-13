import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Link } from 'react-router-dom';
import { navSections } from '../data/navigation';

const featureCards = [
  {
    icon: <MenuBookIcon sx={{ fontSize: 28 }} />,
    title: '체계적인 학습',
    description: '개념을 순서대로 정리하여 기초부터 심화까지 단계별로 익힐 수 있습니다.',
    color: '#087EA4',
    bgColor: '#E6F4F8',
    darkBgColor: '#0A2A35',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 28 }} />,
    title: '코드 예제',
    description: '실제 동작하는 코드 예제와 함께 개념을 이해하고 바로 실습해볼 수 있습니다.',
    color: '#5B4FE9',
    bgColor: '#EEEDF9',
    darkBgColor: '#1A1835',
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: 28 }} />,
    title: '핵심 요약',
    description: '중요한 개념과 패턴을 핵심만 간추려 빠르게 복습할 수 있도록 정리했습니다.',
    color: '#D97706',
    bgColor: '#FEF3C7',
    darkBgColor: '#2A1F0A',
  },
];

export default function HomePage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: isDark
            ? `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`
            : 'linear-gradient(180deg, #E6F4F8 0%, #FFFFFF 100%)',
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 680, mx: 'auto', textAlign: 'center' }}>
            <Chip
              label="학습 노트"
              size="small"
              sx={{
                mb: 3,
                backgroundColor: isDark ? '#0A2A35' : '#E6F4F8',
                color: theme.palette.primary.main,
                fontWeight: 600,
                fontSize: '0.8rem',
              }}
            />
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2rem', md: '3rem' },
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              React 학습 레퍼런스
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                fontSize: { xs: '1rem', md: '1.15rem' },
                color: theme.palette.text.secondary,
                lineHeight: 1.8,
              }}
            >
              React 공식 문서를 기반으로 학습한 내용을 정리한 개인 레퍼런스입니다.
              <br />
              개념 설명, 코드 예제, 핵심 요약을 통해 React를 깊이 이해해보세요.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/learn/quick-start"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  boxShadow: `0 4px 16px ${theme.palette.primary.main}44`,
                  '&:hover': {
                    boxShadow: `0 6px 20px ${theme.palette.primary.main}66`,
                  },
                }}
              >
                학습 시작하기
              </Button>
              <Button
                component={Link}
                to="/learn"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  borderColor: theme.palette.divider,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    background: 'transparent',
                  },
                }}
              >
                목차 보기
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Feature Cards */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={3}>
          {featureCards.map((card) => (
            <Grid size={{ xs: 12, md: 4 }} key={card.title}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: '12px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 24px ${card.color}22`,
                    borderColor: card.color,
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: '12px',
                      backgroundColor: isDark ? card.darkBgColor : card.bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      color: card.color,
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography variant="h4" sx={{ mb: 1, color: theme.palette.text.primary }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Topics overview */}
      <Box sx={{ backgroundColor: theme.palette.background.paper, py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ mb: 1, textAlign: 'center', color: theme.palette.text.primary }}
          >
            학습 목차
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 6, textAlign: 'center' }}
          >
            React의 핵심 개념을 주제별로 정리했습니다.
          </Typography>

          <Grid container spacing={3}>
            {navSections.map((section, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={section.title}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: '12px',
                    border: `1px solid ${theme.palette.divider}`,
                    backgroundColor: theme.palette.background.default,
                    height: '100%',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Typography sx={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700 }}>
                        {idx + 1}
                      </Typography>
                    </Box>
                    <Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
                      {section.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    {section.items.slice(0, 4).map((item) => (
                      <Box
                        key={item.path}
                        component={Link}
                        to={item.path}
                        sx={{
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          py: 0.5,
                          px: 1,
                          borderRadius: '6px',
                          color: theme.palette.text.secondary,
                          fontSize: '0.875rem',
                          transition: 'all 0.15s',
                          '&:hover': {
                            color: theme.palette.primary.main,
                            backgroundColor: `${theme.palette.primary.main}10`,
                          },
                          '&::before': {
                            content: '"›"',
                            fontSize: '1rem',
                            color: theme.palette.divider,
                          },
                        }}
                      >
                        {item.title}
                      </Box>
                    ))}
                    {section.items.length > 4 && (
                      <Box
                        component={Link}
                        to={section.items[0].path}
                        sx={{
                          textDecoration: 'none',
                          py: 0.5,
                          px: 1,
                          fontSize: '0.8rem',
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          '&:hover': { opacity: 0.8 },
                        }}
                      >
                        +{section.items.length - 4}개 더 보기
                      </Box>
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          borderTop: `1px solid ${theme.palette.divider}`,
          py: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          React 공식 문서 기반 개인 학습 레퍼런스
        </Typography>
      </Box>
    </Box>
  );
}
