import React from "react";
import {Page} from "./Page";
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {GlobalStyles} from "./globalStyles"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Page/>
      </div>
    </ThemeProvider>
  );
};

export default App;
