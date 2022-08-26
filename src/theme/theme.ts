import originalStyled, { ThemedStyledInterface } from "styled-components";

export { css } from "styled-components";

export const theme = {
  colors: {
    appBar: "#212121",
    onAppBar: "#ffffff",
    background: "#303030",
    onBackground: "#ffffff",
    card: "#424242",
    onCard: "#ffffff",
  },
  textOpacity: {
    primary: 1,
    secondary: 0.7,
  },
};

export type Theme = typeof theme;

export const styled = originalStyled as ThemedStyledInterface<typeof theme>;
