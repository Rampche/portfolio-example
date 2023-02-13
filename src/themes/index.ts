const baseTheme = {
  typography: {
    fontFamily: "JetBrains Mono, monospace",
    fontSize: "1rem",
  },
};

export const lightTheme = {
  ...baseTheme,
  palette: {
    primary: "#03FFFF",
    secondary: "#7843e6",
    terciary: "#ff00ff",
    background: {
      primary: "#FAFAFA",
      secondary: "#FAFAFA",
    },
    text: {
      primary: "#383a47",
      secondary: "#c4c4c4",
    },
  },
};

export const darkTheme = {
  ...baseTheme,
  palette: {
    primary: "#7843e6",
    secondary: "#03FFFF",
    terciary: "#ff00ff",
    background: {
      primary: "#383a47",
      secondary: "#4d4f61",
    },
    text: {
      primary: "#efefef",
      secondary: "#c4c4c4",
    },
  },
};
