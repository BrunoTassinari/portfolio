import * as S from './styles';
import { linkAnchors } from '../../constants/anchors';

interface Props {
  isOpen: boolean;
}

const MenuNav = ({ isOpen }: Props) => {
  return (
    <S.MenuNav isOpen={isOpen}>
      <S.MenuNavList isOpen={isOpen}>
        {linkAnchors.map((linkAnchor, index) => {
          return (
            <S.MenuLink
              isOpen={isOpen}
              key={index}
              href={linkAnchor.href}
              title={linkAnchor.label}
            >
              {linkAnchor.label}
            </S.MenuLink>
          );
        })}
      </S.MenuNavList>
    </S.MenuNav>
  );
};

export default MenuNav;
