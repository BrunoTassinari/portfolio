import styled, { css } from 'styled-components';

interface Props {
  size: number;
}

export const Icon = styled.img<Props>`
  width: ${({ size }) => size}px;
`;
