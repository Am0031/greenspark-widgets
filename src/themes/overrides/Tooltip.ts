// material-ui
import { Theme } from "@mui/material/styles";

// ==============================|| OVERRIDES - TOOLTIP ||============================== //

export default function Tooltip(theme: Theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.secondary.dark,
          textAlign: "center",
          "& > a": {
            color: theme.palette.primary.main,
            textDecoration: "none",
            fontWeight: 700,
          },
        },
      },
    },
  };
}
