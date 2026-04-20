import { Box, Typography, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import DocPage from '../components/DocPage/DocPage';
import Callout from '../components/DocPage/Callout';
import { navSections } from '../data/navigation';

export default function PlaceholderPage() {
  const theme = useTheme();
  const location = useLocation();

  const currentItem = navSections
    .flatMap((s) => s.items)
    .find((item) => item.path === location.pathname);

  const title = currentItem?.title ?? '페이지';

  return (
    <DocPage title={title} badge="학습하기">
      <Callout type="tip" title="콘텐츠를 작성해주세요">
        <p>
          이 페이지는 아직 내용이 없습니다. <code>src/pages/</code> 디렉토리에 새 페이지 컴포넌트를 만들고
          <code>src/App.tsx</code>의 라우트에 등록하면 됩니다.
        </p>
      </Callout>

      <h2>페이지 만드는 방법</h2>
      <p>
        아래 구조를 참고하여 새 페이지를 만들어보세요.
      </p>
      <Box
        sx={{
          p: 3,
          borderRadius: '10px',
          border: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          whiteSpace: 'pre',
          overflowX: 'auto',
          color: theme.palette.text.secondary,
        }}
      >
        {`// src/pages/MyNewPage.tsx
        import DocPage from '../components/DocPage/DocPage';
        import CodeBlock from '../components/DocPage/CodeBlock';
        import Callout from '../components/DocPage/Callout';

        export default function MyNewPage() {
          return (
            <DocPage title="페이지 제목" badge="학습하기">
              <h2>섹션 제목</h2>
              <p>내용을 여기에 작성하세요.</p>

              <CodeBlock code={\`const hello = 'world';\`} />

              <Callout type="note">
                중요한 내용을 여기에 작성하세요.
              </Callout>
            </DocPage>
          );
        }`}
      </Box>
      <Typography variant="body1" sx={{ mt: 3 }}>
        그런 다음 <code>src/App.tsx</code>에서 라우트를 추가하세요.
      </Typography>
    </DocPage>
  );
}
