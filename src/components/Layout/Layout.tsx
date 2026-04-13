import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const HEADER_HEIGHT = 60;
const SIDEBAR_WIDTH = 272;

interface LayoutProps {
  children: React.ReactNode;
  onToggleTheme: () => void;
}

export default function Layout({ children, onToggleTheme }: LayoutProps) {
  const theme = useTheme();
  const location = useLocation();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const isDocPage =
    location.pathname.startsWith('/learn') || location.pathname.startsWith('/reference');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onToggleTheme={onToggleTheme} />

      <Box
        sx={{
          display: 'flex',
          flex: 1,
          mt: `${HEADER_HEIGHT}px`,
        }}
      >
        {/* Desktop Sidebar */}
        {isDocPage && isDesktop && (
          <Box
            component="nav"
            sx={{
              width: SIDEBAR_WIDTH,
              flexShrink: 0,
              position: 'fixed',
              top: HEADER_HEIGHT,
              left: 0,
              height: `calc(100vh - ${HEADER_HEIGHT}px)`,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.background.default,
              overflowY: 'auto',
            }}
          >
            <Sidebar />
          </Box>
        )}

        {/* Main content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            ml: isDocPage && isDesktop ? `${SIDEBAR_WIDTH}px` : 0,
            minWidth: 0,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
