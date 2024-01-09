"use client";

import { useState, useEffect } from "react";

type CardProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children }: CardProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center p-4 m-[20px] bg-light-primary rounded-lg dark:bg-dark-primary">
      {children}
    </div>
  );
};
export default Card;
