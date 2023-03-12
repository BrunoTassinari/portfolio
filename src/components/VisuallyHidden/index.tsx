import { AriaAttributes, ReactNode } from 'react';
import * as S from './styles';

interface Props extends AriaAttributes {
  children: ReactNode;
}

const VisuallyHidden = ({ children, ...props }: Props) => {
  return <S.VisuallyHidden {...props}>{children}</S.VisuallyHidden>;
};

export default VisuallyHidden;
