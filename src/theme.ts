const palette = {
  raisin: "#1E2026",
  gainsboro: "#E1DFD9",
  platinum: "#E5E5E5",
  green: "#95F967",
  red: "#CD0E61",
  black: "#000000",
  white: "#FFFFFF",
  crayola: "#F9D067",
  lavender: "#E7A6FE",
  tangerine: "#FEA082",
};

export const theme = {
  colors: {
    background: palette.raisin,
    foreground: palette.gainsboro,
    primary: palette.platinum,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: "Raleway",
      fontSize: 36,
      fontWeight: "bold",
    },
    body: {
      fontFamily: "Merriweather",
      fontSize: 16,
    },
    button: {
      fontSize: 36,
      fontWeight: "bold",
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.gainsboro,
    foreground: palette.raisin,
  },
};
