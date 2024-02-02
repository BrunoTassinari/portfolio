'use client';

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import Home from '@pages/Home';
import BaseLayout from './layouts/BaseLayout';

const RootPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class">
      <BaseLayout>
        <Home />
      </BaseLayout>
    </ThemeProvider>
  );
};

export default RootPage;
