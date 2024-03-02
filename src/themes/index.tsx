import { ReactNode, useMemo } from "react";
import Palette from "./palette";
// material-ui
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider,
  Theme,
} from "@mui/material/styles";

import componentsOverride from "./overrides";

// types
type ThemeCustomizationProps = {
  children: ReactNode;
};

export default function ThemeCustomization({
  children,
}: ThemeCustomizationProps) {
  const theme: Theme = useMemo<Theme>(() => Palette(), []);

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440,
        },
      },
      direction: "ltr",
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
    }),
    []
  );

  const themes: Theme = createTheme(themeOptions);

  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
