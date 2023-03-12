import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.secunday};
  display: flex;
  color: ${(props) => props.theme.colors.text};
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.tertiary};
  font-weight: 600;
  padding: 8px 20px;
  height: 60px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-left: 10px;
`;
