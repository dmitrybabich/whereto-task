import { createGlobalStyle } from "styled-components";
import Avenir from "./assets/fonts/AvenirLTStd-Medium.otf";
import Gordita from "./assets/fonts/Gordita-Medium.otf";

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${props => props.theme.colors.background}
}

@font-face {
  font-family: Avenir;
  src: url(${Avenir})
}

@font-face {
  font-family: Gordita;
  src: url(${Gordita})
}
`;
