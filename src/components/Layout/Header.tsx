import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Button,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { headerNavItems } from '../../data/navigation';
import Sidebar from './Sidebar';

interface HeaderProps {
  onToggleTheme: () => void;
}

export default function Header({ onToggleTheme }: HeaderProps) {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDocPage = location.pathname.startsWith('/learn') || location.pathname.startsWith('/reference');

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.background.default,
          borderBottom: `1px solid ${theme.palette.divider}`,
          color: theme.palette.text.primary,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 3 } }}>
          <Toolbar disableGutters sx={{ minHeight: '60px !important', gap: 1 }}>
            {/* Mobile menu button */}
            {isMobile && isDocPage && (
              <IconButton
                size="small"
                onClick={() => setMobileOpen(true)}
                sx={{ color: theme.palette.text.secondary }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: 'inherit',
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700 }}>R</Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: theme.palette.text.primary,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                React Reference
              </Typography>
            </Box>

            {/* Nav links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2, gap: 0.5 }}>
              {headerNavItems.map((item) => {
                const active = location.pathname.startsWith(item.path);
                return (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    size="small"
                    sx={{
                      color: active ? theme.palette.primary.main : theme.palette.text.secondary,
                      fontWeight: active ? 700 : 500,
                      fontSize: '0.9rem',
                      px: 1.5,
                      '&:hover': {
                        color: theme.palette.primary.main,
                        background: 'transparent',
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>

            <Box sx={{ flex: 1 }} />

            {/* Search placeholder */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.75,
                borderRadius: '8px',
                border: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.background.paper,
                cursor: 'pointer',
                minWidth: 200,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <SearchIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                검색...
              </Typography>
              <Box sx={{ ml: 'auto' }}>
                <Typography
                  variant="caption"
                  sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: '4px',
                    px: 0.5,
                    py: 0.25,
                    fontSize: '0.65rem',
                    color: theme.palette.text.secondary,
                  }}
                >
                  ⌘K
                </Typography>
              </Box>
            </Box>

            {/* Theme toggle */}
            <IconButton
              onClick={onToggleTheme}
              size="small"
              sx={{ color: theme.palette.text.secondary }}
            >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile sidebar drawer */}
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            pt: '60px',
          },
        }}
      >
        <Sidebar onNavigate={() => setMobileOpen(false)} />
      </Drawer>
    </>
  );
}
