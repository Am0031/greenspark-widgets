// material-ui
import { Theme } from "@mui/material/styles";
import { SwitchProps } from "@mui/material/Switch";

// ==============================|| SWITCH - SIZE STYLE ||============================== //

interface SwitchSizeProps {
  width: number;
  height: number;
  base: number;
  thumb: number;
  trackRadius: number;
}

function getSizeStyle(size?: SwitchProps["size"]): SwitchSizeProps {
  switch (size) {
    case "small":
      return { width: 28, height: 14, base: 14, thumb: 12, trackRadius: 12 };
    case "medium":
    default:
      return { width: 40, height: 22, base: 20, thumb: 16, trackRadius: 16 };
  }
}

function switchStyle(theme: Theme, size?: SwitchProps["size"]) {
  const sizes: SwitchSizeProps = getSizeStyle(size);

  return {
    width: sizes.width,
    height: sizes.height,
    "& .MuiSwitch-switchBase": {
      padding: 3,
      "&.Mui-checked": {
        transform: `translateX(${sizes.base}px)`,
        "& > .MuiSwitch-thumb": {
          borderColor: theme.palette.primary.main,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      width: sizes.thumb,
      height: sizes.thumb,
    },
    "& .MuiSwitch-track": {
      borderRadius: sizes.trackRadius,
    },
  };
}

// ==============================|| OVERRIDES - TAB ||============================== //

const toggleRing = "#F2EBDB";
const lightBorder = "#AFC6BD";

export default function Switch(theme: Theme) {
  const { palette } = theme;
  return {
    MuiSwitch: {
      styleOverrides: {
        track: {
          opacity: 1,
          backgroundColor: theme.palette.background.paper,
          boxSizing: "border-box",
          border: "1px solid",
          borderColor: lightBorder,
          boxShadow: "0px",
        },
        thumb: {
          borderRadius: "50%",
          border: "1px solid",
          borderColor: toggleRing,
          transition: theme.transitions.create(["width"], {
            duration: 200,
          }),
        },
        switchBase: {
          "&:hover": {
            backgroundColor: palette.primary.light,
          },
          "&.Mui-checked": {
            color: "#f9f9f9",
            "& + .MuiSwitch-track": {
              opacity: 1,
            },
            "&.Mui-disabled": {
              color: theme.palette.background.paper,
            },
          },
          "&.Mui-disabled": {
            color: theme.palette.background.paper,
            "+.MuiSwitch-track": {
              opacity: 0.3,
            },
          },
          // '&.Mui-focusVisible': {
          //   outline: `2px solid #000`,
          //   outlineOffset: -2
          // }
        },
        root: {
          padding: 3,
          margin: 7,
          "&:hover": {
            "& + .MuiSwitch-thumb": {
              backgroundColor: palette.primary.light,
            },
          },
          display: "flex",
          "& ~ .MuiFormControlLabel-label": {
            margin: 6,
          },
          ...switchStyle(theme, "medium"),
        },
        sizeSmall: {
          ...switchStyle(theme, "small"),
        },
      },
    },
  };
}
