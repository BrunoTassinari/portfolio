import styled from 'styled-components';
import { css, keyframes } from 'styled-components';

interface Props {
  isOpen: boolean;
}

interface PropsA {
  isOpen: boolean;
  key: number;
}

const breatheAnimation = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

const breatheAnimation2 = keyframes`
 0% { opacity: 1; }
 100% { opacity: 0; }
`;

export const MenuNav = styled.div<Props>`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  position: fixed;
  z-index: 1;
  top: 60px;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secunday};
  transition: 0.6s cubic-bezier(0, 0, 0, 1.24);
  display: flex;
  flex-direction: column;
`;

export const MenuNavList = styled.ul<Props>`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  transition: 0.4s;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`;

export const MenuLink = styled.a<PropsA>`
  text-decoration: none;
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  animation-iteration-count: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
