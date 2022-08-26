import React from "react";
import { ThemeProvider } from "styled-components";
import { AppBar } from "./components/AppBar";
import { WeakAuraCardList } from "./components/WeakAuraCardList";
import { theme } from "./theme";
import GlobalStyle from "./theme/global-style";
import { mockWagoSlugList } from "./__mocks__/wago";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppBar />
      <WeakAuraCardList slugs={mockWagoSlugList} />
    </ThemeProvider>
  );
};

export default App;
