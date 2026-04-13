import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#087EA4',
      light: '#58C4DC',
      dark: '#005E75',
    },
    secondary: {
      main: '#5B4FE9',
      light: '#8B7FF0',
      dark: '#3B32B8',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F6F7F9',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#404756',
    },
    divider: '#EBF0F5',
  },
  typography: {
    fontFamily: '"Optimistic Display", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.375rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#404756',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#C5C5C5 transparent',
        },
        '*::-webkit-scrollbar': {
          width: '6px',
        },
        '*::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '*::-webkit-scrollbar-thumb': {
          background: '#C5C5C5',
          borderRadius: '3px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '8px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#58C4DC',
      light: '#87D8E8',
      dark: '#087EA4',
    },
    secondary: {
      main: '#8B7FF0',
      light: '#B0A8F5',
      dark: '#5B4FE9',
    },
    background: {
      default: '#16181D',
      paper: '#1E2026',
    },
    text: {
      primary: '#F6F7F9',
      secondary: '#ADADAD',
    },
    divider: '#2D3038',
  },
  typography: lightTheme.typography,
  shape: lightTheme.shape,
  components: {
    ...lightTheme.components,
  },
});
