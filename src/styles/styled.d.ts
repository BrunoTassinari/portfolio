import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secunday: string;

      background: string;
      text: string;
    };

  };
};
