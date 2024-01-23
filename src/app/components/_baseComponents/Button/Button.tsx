import { getVariantClasses } from "./Button.variants";

type ButtonProps = {
  children: React.ReactNode;
  variant: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <button type="button" className={`${getVariantClasses(variant)}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
