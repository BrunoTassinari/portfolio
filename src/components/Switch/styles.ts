import styled, { css } from 'styled-components';

export const Container = styled.div`
  .switch-moon-icon {
    position: absolute;
    z-index: 1;
    right: 25px;
    top: 19px;
  }

  .switch-sun-icon {
    position: absolute;
    z-index: 1;
    right: 55px;
    top: 19px;
  }
`;

export const Input = styled.input`
  height: 0;
  width: 0;

  &:checked + label span {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
  &:focus-visible + label {
    box-shadow: 0px 0px 4px 3px red;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 60px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;

  &:active span {
    width: 40px;
  }
`;

export const Toggle = styled.span`
  content: '';
  position: absolute;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 45px;
  transition: 0.2s;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  z-index: 2;
`;
