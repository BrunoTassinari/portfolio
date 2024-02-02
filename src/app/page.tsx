'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Home from '@pages/Home';

const RootPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class">
      <Home />
    </ThemeProvider>
  );
};

export default RootPage;
