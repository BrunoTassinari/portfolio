import { createGlobalStyle } from 'styled-components';
import { pxToVw } from '../utils/utils';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.primary};
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.colors.text};
  }



`;
