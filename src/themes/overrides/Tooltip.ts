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
          boxShadow: `0px 0.7777777910232544px 2.9907407760620117px 0px rgba(0, 0, 0, 0.01)
          , 0px 3.422222137451172px 6.192592620849609px 0px rgba(0, 0, 0, 0.02), 0px 8.399999618530273px 12.350000381469727px 0px rgba(0, 0, 0, 0.03), 0px 16.177778244018555px 24.207406997680664px 0px rgba(0, 0, 0, 0.03), 0px 27.22222137451172px 44.50925827026367px 0px rgba(0, 0, 0, 0.04), 0px 42px 76px 0px rgba(0, 0, 0, 0.05)
          `,
        },
      },
    },
  };
}
