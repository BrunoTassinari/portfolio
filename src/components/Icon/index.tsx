import * as S from './styles';

interface Props {
  type: string;
  size?: number;
  className?: string;
}

const Icon = ({ type, size = 24, className }: Props) => {
  return (
    <S.Icon src={`src/assets/${type}.png`} className={className} size={size} />
  );
};

export default Icon;
