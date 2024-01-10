"use client";

import Mounted from "../Mounted";

type CardProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children }: CardProps) => {
  return (
    <Mounted>
      <div className="flex flex-col items-center justify-center p-4 m-[20px]">
        {children}
      </div>
    </Mounted>
  );
};
export default Card;
