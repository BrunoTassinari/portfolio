import styled from 'styled-components';
import { css } from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const HamburguerButton = styled.button<Props>`
  width: 40px;
  height: 40px;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 10px 6px;
  background: transparent;
  border: none;
  cursor: pointer;

  span.bar {
    position: relative;
    display: block;
    height: 3px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 4px;
    transition: 0.4s;
    align-self: start;
  }

  span.large {
    width: 27px;
  }

  span.medium {
    width: 22px;
    transition: 0.4s;
  }

  span.small {
    width: 16px;
  }

  ${({ isOpen }) =>
    isOpen
      ? css`
          span.large {
            top: 1.5px;
            transform: rotate(45deg) translate(5px, 5px);
          }

          span.medium {
            opacity: 0;
            transition: 0.4s;
          }

          span.small {
            top: -1.5px;
            width: 27px;
            transform: rotate(-46deg) translate(5px, -5px);
          }
        `
      : ''}
`;
