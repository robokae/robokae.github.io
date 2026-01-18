const lightTheme = {
  name: "light",
  primaryBackgroundColor: "#f0f1f1",
  secondaryBackgroundColor: "#F9F9F9",
  tertiaryBackgroundColor: "#D3D6D7",
  headerColor: "#f3f3f3",
  footerColor: "#E4E7E9",
  overlayColor: "rgba(18, 28, 32, 0.65)",
  primaryFontColor: "#29353D",
  secondaryFontColor: "#66727E",
  boxShadow: "0.1rem 0.1rem 1rem rgba(15, 16, 17, 0.1)",
  lineColor: "#c5cbd0",
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
    themeToggle: {
      iconColor: "#4c5861",
      backgroundColor: "#29353D",
      foregroundColor: "#F1F2F3",
    },
  },
  toggleButton: {
    backgroundColor: "#4c5861",
    foregroundColor: "#F1F2F2",
    fontColor: "#4b5762",
    borderColor: "#465966",
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
      overview: [
        {
          backgroundColor: "#A987D9",
          foregroundColor: "#F5EEFF",
        },
        {
          backgroundColor: "#77B584",
          foregroundColor: "#EDFFEE",
        },
        {
          backgroundColor: "#7CA1BC",
          foregroundColor: "#D4E9F7",
        },
        {
          backgroundColor: "#CAB889",
          foregroundColor: "#F9F4D1",
        },
      ],
      reflection: {
        background: "linear-gradient(90deg, #E8EDF0 0%, #E3E5E6 100%)",
      },
      experience: {
        backgroundColor: [
          "linear-gradient(315deg, #C8DDEC 0%, #A6B9C9 100%)",
          "linear-gradient(45deg, #D4DDE6 0%, #C6D5DF 100%)",
          "linear-gradient(0deg, #DFE6EC 0%, #D2DAE1 100%)",
        ],
        fontColor: "#29353D",
      },
    },
  },
};

const darkTheme = {
  name: "dark",
  primaryBackgroundColor: "#131b1f",
  secondaryBackgroundColor: "#1f2930",
  tertiaryBackgroundColor: "#283137",
  headerColor: "#1d262e",
  footerColor: "#1d262e",
  overlayColor: "rgba(15, 22, 29, 0.9)",
  primaryFontColor: "#DFEDEE",
  secondaryFontColor: "#758392",
  boxShadow: "0.1rem 0.1rem 1rem rgba(2, 10, 18, 0.3)",
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
    themeToggle: {
      iconColor: "#53616f",
      backgroundColor: "#242D34",
      foregroundColor: "#47555F",
    },
  },
  toggleButton: {
    backgroundColor: "#53616f",
    foregroundColor: "#DFEDEE",
    fontColor: "#47555F",
    borderColor: "#47555F",
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
      overview: [
        {
          backgroundColor: "#9768DC",
          foregroundColor: "#F5EEFF",
        },
        {
          backgroundColor: "#86B993",
          foregroundColor: "#EDFFEE",
        },
        {
          backgroundColor: "#6CB3D1",
          foregroundColor: "#D4E9F7",
        },
        {
          backgroundColor: "#AA996D",
          foregroundColor: "#F9F4D1",
        },
      ],
      reflection: {
        background: "linear-gradient(90deg, #2C3841 0%, #1F292E 100%)",
      },
      experience: {
        backgroundColor: [
          "linear-gradient(315deg, #5B6F86 0%, #384D64 100%)",
          "linear-gradient(45deg, #6788A4 0%, #4B5880 100%)",
          "linear-gradient(0deg, #66727E 0%, #505E6A 100%)",
        ],
        fontColor: "#29353D",
      },
    },
  },
};

export { lightTheme, darkTheme };
