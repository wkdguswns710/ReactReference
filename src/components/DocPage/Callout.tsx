import { Box, Typography, useTheme } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlined';

type CalloutType = 'note' | 'warning' | 'tip' | 'danger';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutConfig = {
  note: {
    icon: <InfoOutlinedIcon sx={{ fontSize: 18 }} />,
    label: '참고',
    light: { bg: '#E6F4F8', border: '#B3DDE8', title: '#087EA4', icon: '#087EA4' },
    dark: { bg: '#0A2535', border: '#1A4A5E', title: '#58C4DC', icon: '#58C4DC' },
  },
  tip: {
    icon: <TipsAndUpdatesIcon sx={{ fontSize: 18 }} />,
    label: '팁',
    light: { bg: '#F0FDF4', border: '#BBF7D0', title: '#15803D', icon: '#16A34A' },
    dark: { bg: '#0A2A18', border: '#1A4A30', title: '#4ADE80', icon: '#4ADE80' },
  },
  warning: {
    icon: <WarningAmberIcon sx={{ fontSize: 18 }} />,
    label: '주의',
    light: { bg: '#FFFBEB', border: '#FDE68A', title: '#B45309', icon: '#D97706' },
    dark: { bg: '#2A1F0A', border: '#4A3818', title: '#FCD34D', icon: '#FCD34D' },
  },
  danger: {
    icon: <ErrorOutlineIcon sx={{ fontSize: 18 }} />,
    label: '경고',
    light: { bg: '#FFF1F2', border: '#FECDD3', title: '#BE123C', icon: '#E11D48' },
    dark: { bg: '#2A0A0F', border: '#4A1820', title: '#FB7185', icon: '#FB7185' },
  },
};

export default function Callout({ type = 'note', title, children }: CalloutProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const config = calloutConfig[type];
  const colors = isDark ? config.dark : config.light;

  return (
    <Box
      sx={{
        my: 3,
        p: 2.5,
        borderRadius: '10px',
        backgroundColor: colors.bg,
        border: `1px solid ${colors.border}`,
        borderLeft: `4px solid ${colors.border}`,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
        <Box sx={{ color: colors.icon, mt: 0.1, flexShrink: 0 }}>{config.icon}</Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '0.875rem',
              color: colors.title,
              mb: children ? 0.5 : 0,
            }}
          >
            {title || config.label}
          </Typography>
          {children && (
            <Box
              sx={{
                fontSize: '0.9rem',
                lineHeight: 1.7,
                color: theme.palette.text.primary,
                '& p': { m: 0 },
                '& code': {
                  fontFamily: 'monospace',
                  fontSize: '0.85em',
                  backgroundColor: `${colors.border}80`,
                  px: 0.5,
                  py: 0.1,
                  borderRadius: '3px',
                },
              }}
            >
              {children}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
