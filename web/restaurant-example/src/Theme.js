import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e2ded3", //white
    },
    secondary: {
      main: "#dcac58", //orange/gold
    },
    background: {
      main: "#1a1a1a", //dark grey
      default: "black",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
  },
});

export default theme;
