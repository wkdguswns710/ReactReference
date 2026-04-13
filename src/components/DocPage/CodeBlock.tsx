import { Box, IconButton, Tooltip, Typography, useTheme } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({ code, language = 'jsx', filename }: CodeBlockProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        my: 3,
        borderRadius: '12px',
        overflow: 'hidden',
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: isDark ? '#1A1D23' : '#0F1117',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 1,
          borderBottom: `1px solid ${isDark ? '#2D3038' : '#1E2128'}`,
          backgroundColor: isDark ? '#1E2126' : '#161B22',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {/* Window dots */}
          <Box sx={{ display: 'flex', gap: 0.75 }}>
            {['#FF5F57', '#FEBC2E', '#28C840'].map((color) => (
              <Box
                key={color}
                sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: color }}
              />
            ))}
          </Box>
          {filename && (
            <Typography sx={{ fontSize: '0.78rem', color: '#8B8FA8', fontFamily: 'monospace' }}>
              {filename}
            </Typography>
          )}
          {!filename && (
            <Typography sx={{ fontSize: '0.75rem', color: '#5A5F7A', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {language}
            </Typography>
          )}
        </Box>
        <Tooltip title={copied ? '복사됨!' : '코드 복사'} placement="top">
          <IconButton
            size="small"
            onClick={handleCopy}
            sx={{
              color: copied ? '#28C840' : '#8B8FA8',
              '&:hover': { color: '#fff' },
            }}
          >
            {copied ? <CheckIcon sx={{ fontSize: 16 }} /> : <ContentCopyIcon sx={{ fontSize: 16 }} />}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Code */}
      <Box
        component="pre"
        sx={{
          m: 0,
          p: 3,
          overflowX: 'auto',
          fontFamily: '"Fira Code", "Source Code Pro", "Consolas", monospace',
          fontSize: '0.875rem',
          lineHeight: 1.7,
          color: '#E2E8F0',
          '& .keyword': { color: '#C678DD' },
          '& .string': { color: '#98C379' },
          '& .comment': { color: '#5C6370', fontStyle: 'italic' },
          '& .number': { color: '#D19A66' },
          '& .function': { color: '#61AFEF' },
          '& .tag': { color: '#E06C75' },
          '& .attr': { color: '#D19A66' },
        }}
      >
        <code>{code}</code>
      </Box>
    </Box>
  );
}
