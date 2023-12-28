import { DefaultTheme } from "styled-components";

export const baseTheme = {
  colors: {
    primary: "#1A66FF",
    primaryLight: "#1AABFF",
    primaryDark: "#004BE1",

    gray: {
      0: "#FFFFFF",
      20: "#FFFFFF33",
      25: "#FFFFFF40",
      35: "#FFFFFF59",
      50: "#FFFFFF80",
      70: "#FFFFFFB2",
      75: "#FFFFFFBF",
      85: "#FFFFFFD9",
    },

    green: "#00FF75",
  },

  sizes: {
    avatar: {
      small: "70px",
      medium: "75px",
      big: "100px",
    },
  },
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: "dark",
  
  colors: {
    ...baseTheme.colors,
    bg: "#222222",
    block: "#0D0D0D",
    chat: "#1B1B1B",
    input: "#212121",
    border: "#FFFFFF33",
    text: "#FFFFFF"
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: "light",

  colors: {
    ...baseTheme.colors,
    bg: "#f6f6f6",
    block: "#0356bc",
    chat: "#5f5f5f",
    input: "#616161",
    border: "#707070",
    text: "#000000"
  },
};
