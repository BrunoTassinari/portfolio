import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secunday: string;
      tertiary: string;

      reversePrimary: string;

      text: string;
      subText: string;
    };
  }
}
