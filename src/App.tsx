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

// 컴포넌트 밖에 있는 이유
// navSections는 정적 데이터이므로 렌더링마다 재계산할 필요가 없음
const placeholderPaths = navSections
  .flatMap((s) => s.items)
  .map((item) => item.path)
  .filter((path) => path !== '/learn/quick-start');

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> // MUI 테마를 앱 전체에 공급
      <CssBaseline /> // body 여백/배경색 등 브라우저 기본 스타일 초기화
      <BrowserRouter> // URL 기반 라우팅 컨텍스트 제공
        <Layout onToggleTheme={() => setDarkMode((prev) => !prev)}>
          <Routes> // URL에 맞는 페이지 하나를 렌더링
            // 각 경로별 페이지 컴포넌트
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
