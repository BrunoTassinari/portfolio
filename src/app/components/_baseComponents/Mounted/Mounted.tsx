"use client";

import { useState, useEffect } from "react";

type MountedProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Mounted = ({ children }: MountedProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <>{children}</>;
};

export default Mounted;
