import { useState, useContext } from 'react';
import { ContextTheme, ThemeContextType } from '../../utils/ThemeContext';
import * as S from './styles';
import * as C from '../index';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { toggleTheme } = useContext(ContextTheme) as ThemeContextType;

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <S.Container>
      <div>
        <C.HamburguerButton isOpen={openMenu} action={toggleMenu} />
        <S.Title>Bruno Tassinari</S.Title>
      </div>
      <C.Switch isOpen={openMenu} action={toggleTheme} />

      <C.MenuNav isOpen={openMenu} />
    </S.Container>
  );
};

export default Header;
