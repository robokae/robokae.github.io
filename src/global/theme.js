const lightTheme = {
  name: "light",
  primaryBackgroundColor: "#f0f1f1",
  secondaryBackgroundColor: "#F9F9F9",
  tertiaryBackgroundColor: "#D3D6D7",
  headerColor: "#f3f3f3",
  footerColor: "#f8f8f8",
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
          backgroundColor: "linear-gradient(315deg, #D2C4E6 0%, #A18DBE 100%)",
          foregroundColor: "#F5EEFF",
        },
        {
          backgroundColor: "linear-gradient(315deg, #BFE9C8 0%, #79B88F 100%)",
          foregroundColor: "#EDFFEE",
        },
        {
          backgroundColor: "linear-gradient(315deg, #A6C6DD 0%, #6388A2 100%)",
          foregroundColor: "#D4E9F7",
        },
        {
          backgroundColor: "linear-gradient(315deg, #E9DDBF 0%, #CAB585 100%)",
          foregroundColor: "#F9F4D1",
        },
      ],
      reflection: {
        background: "linear-gradient(0deg, #A8B4BA 0%, #8E9CA7 100%)",
      },
      experience: {
        lightPurpleGradient:
          "linear-gradient(315deg, #A4B7D1 0%, #8597B1 100%)",
        lightGreyGradient: "linear-gradient(45deg, #B2BBC2 0%, #8B9CA8 100%)",
        lightBlueGradient: "linear-gradient(0deg, #A0B6C9 0%, #7F95A8 100%)",
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
          backgroundColor: "linear-gradient(315deg, #624D80 0%, #3F2A5D 100%)",
          foregroundColor: "#F5EEFF",
        },
        {
          backgroundColor: "linear-gradient(315deg, #4F965E 0%, #25653B 100%)",
          foregroundColor: "#EDFFEE",
        },
        {
          backgroundColor: "linear-gradient(315deg, #6289A5 0%, #335B78 100%)",
          foregroundColor: "#D4E9F7",
        },
        {
          backgroundColor: "linear-gradient(315deg, #AD9C71 0%, #80662E 100%)",
          foregroundColor: "#F9F4D1",
        },
      ],
      reflection: {
        background: "linear-gradient(0deg, #677782 0%, #505D63 100%)",
      },
      experience: {
        lightPurpleGradient:
          "linear-gradient(315deg, #A4B7D1 0%, #8597B1 100%)",
        lightGreyGradient: "linear-gradient(45deg, #B2BBC2 0%, #8B9CA8 100%)",
        lightBlueGradient: "linear-gradient(0deg, #A0B6C9 0%, #7F95A8 100%)",
        fontColor: "#29353D",
      },
    },
  },
};

export { lightTheme, darkTheme };
