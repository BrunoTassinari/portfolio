import Mounted from "@/app/components/_baseComponents/Mounted";
import { getVariantClasses } from "./Button.variants";

type ButtonProps = {
  children: React.ReactNode;
  variant: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <Mounted>
      <button
        type="button"
        className={`${getVariantClasses(variant)}`}
        {...rest}
      >
        {children}
      </button>
    </Mounted>
  );
};

export default Button;
