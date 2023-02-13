import "styled-components";

declare module "styled-components" {
  export interface Defaulttheme {
    typography: {
      fontFamily: string;
      fontSize: string;
    };

    palette: {
      primary: string;
      secondary: string;
      terciary: string;
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
    };
  }
}
