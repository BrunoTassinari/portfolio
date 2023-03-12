import styled from 'styled-components';
import { css } from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const MenuNav = styled.div<Props>`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  position: fixed;
  z-index: 1;
  top: 60px;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secunday};
  transition: 0.4s cubic-bezier(0, 0, 0, 1.24);
`;
