// material-ui
import { Theme } from "@mui/material/styles";
import { Box, CheckboxProps } from "@mui/material";
import {
  ButtonProps,
  ChipProps,
  IconButtonProps,
  SliderProps,
} from "@mui/material";

// // project import
// // import getColors from "utils/getColors";

// // types
// export type ButtonVariantProps =
//   | "contained"
//   | "light"
//   | "outlined"
//   | "dashed"
//   | "text"
//   | "shadow";
// export type IconButtonShapeProps = "rounded" | "square";
// type TooltipColor =
//   | "primary"
//   | "secondary"
//   | "info"
//   | "success"
//   | "warning"
//   | "error"
//   | "default";
// export type ColorProps =
//   | ChipProps["color"]
//   | ButtonProps["color"]
//   | IconButtonProps["color"]
//   | SliderProps["color"]
//   | TooltipColor;
// export type ExtendedStyleProps = {
//   color: ColorProps;
//   theme: Theme;
// };

export default function Radio(theme: Theme) {
  const { palette } = theme;

  return {
    MuiRadio: {
      defaultProps: {
        className: "size-small",
        icon: (
          <Box
            className="icon"
            sx={{
              width: 16,
              height: 16,
              boxSizing: "border-box",
              border: "2px solid",
              borderColor: "inherit",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="dot"
              sx={{
                width: 14,
                height: 14,
                boxSizing: "border-box",
                border: "8px solid",
                borderRadius: 0,
                backgroundColor: "inherit",
              }}
            ></Box>
          </Box>
        ),
        checkedIcon: (
          <Box
            className="icon"
            sx={{
              width: 16,
              height: 16,
              boxSizing: "border-box",
              border: "2px solid",
              borderColor: palette.secondary.light,
              borderRadius: 0,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="dot"
              sx={{
                width: 14,
                height: 14,
                boxSizing: "border-box",
                border: "6px solid",
                borderRadius: 0,
                backgroundColor: "inherit",
              }}
            ></Box>
          </Box>
        ),
      },
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  };
}
