'use client';

import { useEffect, useState } from 'react';
import MainContent from '@layouts/_MainContent';
import Providers from './utils/providers';

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Providers>
      <MainContent />
    </Providers>
  );
};

export default Home;
