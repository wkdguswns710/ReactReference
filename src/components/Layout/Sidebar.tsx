import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navSections } from '../../data/navigation';

interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const theme = useTheme();
  const location = useLocation();

  const getInitialOpen = () => {
    const openMap: Record<string, boolean> = {};
    navSections.forEach((section) => {
      const hasActive = section.items.some((item) => location.pathname === item.path);
      openMap[section.title] = hasActive || true; // open all by default
    });
    return openMap;
  };

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(getInitialOpen);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        py: 2,
        px: 1,
      }}
    >
      {navSections.map((section) => (
        <Box key={section.title} sx={{ mb: 0.5 }}>
          <ListItemButton
            onClick={() => toggleSection(section.title)}
            sx={{
              borderRadius: '6px',
              py: 0.75,
              px: 1.5,
              '&:hover': { backgroundColor: theme.palette.action.hover },
            }}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: theme.palette.text.secondary,
                  }}
                >
                  {section.title}
                </Typography>
              }
            />
            {openSections[section.title] ? (
              <ExpandLessIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
            ) : (
              <ExpandMoreIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
            )}
          </ListItemButton>

          <Collapse in={openSections[section.title]} timeout="auto">
            <List disablePadding>
              {section.items.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <ListItemButton
                    key={item.path}
                    component={Link}
                    to={item.path}
                    onClick={onNavigate}
                    sx={{
                      borderRadius: '6px',
                      py: 0.6,
                      pl: 2.5,
                      pr: 1.5,
                      mb: 0.25,
                      backgroundColor: active
                        ? `${theme.palette.primary.main}18`
                        : 'transparent',
                      borderLeft: active
                        ? `2px solid ${theme.palette.primary.main}`
                        : '2px solid transparent',
                      '&:hover': {
                        backgroundColor: active
                          ? `${theme.palette.primary.main}22`
                          : theme.palette.action.hover,
                      },
                    }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: '0.9rem',
                            fontWeight: active ? 600 : 400,
                            color: active
                              ? theme.palette.primary.main
                              : theme.palette.text.primary,
                            lineHeight: 1.4,
                          }}
                        >
                          {item.title}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}
