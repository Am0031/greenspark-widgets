import { Box, CheckboxProps, Theme } from "@mui/material";

interface CheckboxSizeProps {
  size: number;
  fontSize: number;
  position: number;
}

function getSizeStyle(size?: CheckboxProps["size"]): CheckboxSizeProps {
  switch (size) {
    case "small":
      return { size: 16, fontSize: 1, position: 1 };
    case "medium":
    default:
      return { size: 20, fontSize: 1.35, position: 2 };
  }
}

function checkboxStyle(size?: CheckboxProps["size"]) {
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
          "&.size-small": {
            ...checkboxStyle("small"),
          },
          "&.size-medium": {
            ...checkboxStyle("medium"),
          },
        },
      },
    },
  };
}
