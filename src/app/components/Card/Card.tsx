"use client";

import Mounted from "../Mounted";

type CardProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children }: CardProps) => {
  return (
    <Mounted>
      <div className="container w-[80%] m-auto my-5 flex flex-col items-center justify-center">
        {children}
      </div>
    </Mounted>
  );
};
export default Card;
