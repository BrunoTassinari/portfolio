import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { Container } from './styles';
import { ContextTheme, ThemeContextType } from '../../utils/ThemeContext';

const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = React.useContext(ContextTheme) as ThemeContextType;

  return (
    <Container>
      Header
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={50}
        handleDiameter={20}
      />
    </Container>
  );
};

export default Header;
