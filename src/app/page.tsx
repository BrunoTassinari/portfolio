'use client';

import { useEffect, useState } from 'react';
import Home from '@pages/Home';
import Providers from './utils/providers';

const RootPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Providers>
      <Home />
    </Providers>
  );
};

export default RootPage;
