"use client";

import Mounted from "../Mounted";

type CardProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children }: CardProps) => {
  return (
    <Mounted>
      <div className="container w-[88%] m-auto my-9 flex flex-col items-center justify-center gap-[20px]">
        {children}
      </div>
    </Mounted>
  );
};
export default Card;
