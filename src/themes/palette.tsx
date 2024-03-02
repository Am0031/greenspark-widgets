import { createTheme } from "@mui/material/styles";

const Palette = () => {
  return createTheme({
    palette: {
      primary: {
        main: "#3B755F",
        light: "#AFC6BD",
      },
      secondary: {
        main: "#808080",
        light: "#B0B0B0",
        dark: "#212121",
      },
      background: { default: "#FFFFFF", paper: "#F9F9F9" },
    },
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            height: "24px",
            width: "24px",
          },
        },
      },
    },
  });
};

export default Palette;
