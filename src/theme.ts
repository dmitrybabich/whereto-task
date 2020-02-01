import "styled-components";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    background: "#f4f5f6",
    secondaryBackground: "white",
    buttonBackground: "#003554",
    textThird: "black",
    textSecondary: "rgba(255,255,255,0.5)",
    text: "#ffffff",
    link: "#008cdd",
    content: "#393939"
  },
  borders: {
    main: "#e7e7e7",
    secondary: "#008cdd",
    third: "black",
    checkBox: "#e6e6e6",
  },
  fonts: {
    main: "Avenir",
    secondary: "Gordita"
  },
  gradient: "linear-gradient(to right, #00658d, #003554);"
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      secondaryBackground: string;
      buttonBackground: string;
      textSecondary: string;
      text: string;
      textThird: string;
      link: string;
      content:string;
    };
    borders: {
      main: string;
      secondary: string;
      third: string;
      checkBox: string;
    };
    fonts: {
      main: string;
      secondary: string;
    };
    gradient: string;
  }
}
