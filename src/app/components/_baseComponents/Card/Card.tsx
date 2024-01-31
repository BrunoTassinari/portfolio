import cn from '@/app/utils/twMerge.utils';

type CardProps = {
  className?: string;
  id: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = ({ children, className, id }: CardProps) => (
  <>
    <div id={id} />
    <section
      className={cn(
        'container w-[88%] m-auto my-8 flex flex-col gap-[10px]',
        className,
      )}
    >
      {children}
    </section>
  </>
);
export default Card;
