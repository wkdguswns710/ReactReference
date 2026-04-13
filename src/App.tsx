import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LearnIndexPage from './pages/LearnIndexPage';
import QuickStartPage from './pages/QuickStartPage';
import PlaceholderPage from './pages/PlaceholderPage';
import { navSections } from './data/navigation';

// All paths that should show PlaceholderPage (exclude quick-start which has its own page)
const placeholderPaths = navSections
  .flatMap((s) => s.items)
  .map((item) => item.path)
  .filter((path) => path !== '/learn/quick-start');

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout onToggleTheme={() => setDarkMode((prev) => !prev)}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnIndexPage />} />
            <Route path="/learn/quick-start" element={<QuickStartPage />} />

            {/* Placeholder routes for all other doc pages */}
            {placeholderPaths.map((path) => (
              <Route key={path} path={path} element={<PlaceholderPage />} />
            ))}

            {/* Reference section placeholder */}
            <Route path="/reference" element={<Navigate to="/learn" replace />} />

            {/* 404 fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
