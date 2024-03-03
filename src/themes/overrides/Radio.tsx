// material-ui
import { Theme } from "@mui/material/styles";

export default function Radio(theme: Theme) {
  return {
    MuiRadio: {
      defaultProps: {
        className: "size-small",
      },
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  };
}
