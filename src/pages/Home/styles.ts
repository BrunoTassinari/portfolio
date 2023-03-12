import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  background: ${(props) => props.theme.colors.primary};
  overflow: hidden;
`;
