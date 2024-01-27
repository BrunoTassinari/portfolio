'use client';

import { ThemeProvider } from 'next-themes';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class">{children}</ThemeProvider>
);

export default Providers;
