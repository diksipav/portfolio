const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Mulish, Roboto, "Helvetica Neue", sans-serif',
    heading: 'Mulish, Roboto, "Helvetica Neue", sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.35,
  },
  colors: {
    text: "#111b1a",
    background: "#deebe9",
    primary: "#65a098",
    secondary: "#3e645f",
    light: "#eff5f4",
  },

  breakpoints: ["481px", "769px", "1201px"],

  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: ["42px", "48px", "51px"],
      margin: ["12px 0", "20px 0"],
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: 500,
      fontSize: "42px",
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: ["23px", "24px", "28px", "33px"],
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "500",
      fontSize: ["19px", "22px", "26px", "30px"],
      margin: "6px 0",
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "500",
      fontSize: ["19px", "22px", "26px", "30px"],
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "600",
      fontSize: ["15px", "16px", "18px", "19px"],
      margin: "0",
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      fontSize: ["13px", "13px", "14px"],
      lineHeight: "body",
      whiteSpace: "pre-line",
      marginTop: 0,
    },
    a: {
      color: "primary",
    },
    italic: {
      fontFamily: "body",
      lineHeight: "body",
      fontStyle: "italic",
      fontSize: ["11px", "12px", "13px", "13px"],
      fontWeight: "300",
      margin: 0,
    },
  },
  containers: {
    flexCenter: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    page: {
      minHeight: "calc(100vh - 120px)",
      m: 0,
      p: "20px",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      padding: ["20px", "20px", "60px"],
    },
    link: {
      margin: "0 20px",
      cursor: "pointer",
      paddingBottom: "1px",
      borderBottom: "1px solid",
      borderColor: "secondary",
      color: "secondary",
      "&:hover": {
        color: "primary",
        borderColor: "primary",
      },
    },
    linkLight: {
      margin: "20px",
      paddingBottom: "1px",
      borderBottom: "1px solid",
      borderColor: "light",
      color: "light",
    },
    footerLink: {
      width: "22px",
      margin: "0 24px",
    },
    section: {
      backgroundColor: "rgba(256,256,256, 0.9)",
      padding: " 30px 20px 10px 20px",
      borderRadius: "12px",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
      position: "relative",
      mb: "20px",
      height: "fit-content",
    },
  },
};

export default theme;
