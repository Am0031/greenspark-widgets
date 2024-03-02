import { Box, Theme } from "@mui/material";

function checkboxStyle() {
  return {
    "& .icon": {
      width: 20,
      height: 20,
      margin: "2px",
      "& .filled": {
        fontSize: `${1.35}rem`,
        top: -2,
        left: -2,
      },
    },
  };
}

export default function Checkbox(theme: Theme) {
  const { palette } = theme;
  return {
    MuiCheckbox: {
      defaultProps: {
        className: "size-medium",
        icon: (
          <Box
            className="icon"
            sx={{
              width: 34,
              height: 34,
              border: "2px solid",
              borderColor: "inherit",
              borderRadius: 0.25,
              boxSizing: "border-box",
            }}
          />
        ),
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: palette.primary.light,
            color: palette.secondary.main,
          },
          color: palette.secondary.dark,
          ...checkboxStyle(),
        },
      },
    },
  };
}
