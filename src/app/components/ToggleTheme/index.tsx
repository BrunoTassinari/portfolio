'use client';

import { useTheme } from 'next-themes';
import Icon from '@/app/components/baseComponents/Icon';

const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-1 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <Icon
        icon={resolvedTheme === 'dark' ? 'sun' : 'moon'}
        className="h-6 w-6 text-darkBlue dark:text-white "
      />
    </button>
  );
};

export default ToggleTheme;
