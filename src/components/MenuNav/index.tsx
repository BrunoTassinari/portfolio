import * as S from './styles';

interface Props {
  isOpen: boolean;
}

const MenuNav = ({ isOpen }: Props) => {
  return <S.MenuNav isOpen={isOpen} />;
};

export default MenuNav;
