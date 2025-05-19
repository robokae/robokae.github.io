const lightTheme = {
  name: "light",
  primaryBackgroundColor: "#EBEDEF",
  secondaryBackgroundColor: "#F8F8F8",
  tertiaryBackgroundColor: "#D3D6D7",
  headerColor: "#F1F2F2",
  footerColor: "#E4E6E8",
  overlayColor: "rgba(18, 28, 32, 0.85)",
  primaryFontColor: "#29353D",
  secondaryFontColor: "#66727E",
  boxShadow: "0.5rem 0.5rem 1rem rgba(153, 174, 215, 0.2)",
  lineColor: "#B8BEC2",
  tagColor: "#E5EBF0",
  accentColor: "#6F8FA6",
  warningColor: "#CC5E57",
  form: {
    input: {
      backgroundColor: "#F2F3F3",
      labelColor: "#6D818F",
      placeholderColor: "#8D9FAA",
    },
  },
  button: {
    cta: {
      backgroundColor: "#6F8FA6",
      fontColor: "#EBEDEF",
    },
    secondary: {
      backgroundColor: "#D7DDE4",
      fontColor: "#6D818F",
    },
    toggle: {
      backgroundColor: "#4c5861",
      foregroundColor: "#F1F2F2",
      fontColor: "#4b5762",
      borderColor: "#465966",
    },
    themeToggle: {
      iconColor: "#4c5861",
      backgroundColor: "#29353D",
      foregroundColor: "#F1F2F3",
    },
  },
  tag: {
    backgroundColor: "#D3D6D7",
    fontColor: "#8D9FAA",
  },
  pages: {
    home: {
      hero: {
        backgroundColor: "#8DA4B4",
        subheadingColor: "#3C5565",
      },
    },
  },
};

const darkTheme = {
  name: "dark",
  primaryBackgroundColor: "#11191F",
  secondaryBackgroundColor: "#182128",
  tertiaryBackgroundColor: "#283137",
  headerColor: "#192229",
  footerColor: "#192229",
  overlayColor: "rgba(15, 22, 29, 0.85)",
  primaryFontColor: "#DFEDEE",
  secondaryFontColor: "#758392",
  boxShadow: "0.25rem 0.25rem 1rem rgba(2, 10, 18, 0.2)",
  lineColor: "#2D343A",
  tagColor: "#202A34",
  accentColor: "#97DBFB",
  warningColor: "#CC5E57",
  form: {
    input: {
      backgroundColor: "#11181C",
      labelColor: "#8D9FAA",
      placeholderColor: "#4F5B63",
    },
  },
  button: {
    cta: {
      backgroundColor: "#97DBFB",
      fontColor: "#11191F",
    },
    secondary: {
      backgroundColor: "#1D262D",
      fontColor: "#8D9FAA",
    },
    toggle: {
      backgroundColor: "#53616f",
      foregroundColor: "#DFEDEE",
      fontColor: "#47555F",
      borderColor: "#47555F",
    },
    themeToggle: {
      iconColor: "#53616f",
      backgroundColor: "#242D34",
      foregroundColor: "#47555F",
    },
  },
  tag: {
    backgroundColor: "#283137",
    fontColor: "#4F5B63",
  },
  pages: {
    home: {
      hero: {
        backgroundColor: "#3B4C58",
        subheadingColor: "#A1B6C4",
      },
    },
  },
};

export { lightTheme, darkTheme };
