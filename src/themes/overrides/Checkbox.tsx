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
  const sizes: CheckboxSizeProps = getSizeStyle(size);

  return {
    "& .icon": {
      width: sizes.size,
      height: sizes.size,
      "& .filled": {
        fontSize: `${sizes.fontSize}rem`,
        top: -sizes.position,
        left: -sizes.position,
      },
    },
  };
}

export default function Checkbox(theme: Theme) {
  const { palette } = theme;
  return {
    MuiCheckbox: {
      defaultProps: {
        className: "size-small",
        icon: (
          <Box
            className="icon"
            sx={{
              width: 32,
              height: 32,
              border: "2px solid",
              borderColor: "inherit",
              borderRadius: 0.25,
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
