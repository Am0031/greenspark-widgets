import { Theme } from "@mui/material/styles";
import merge from "lodash/merge";

import Checkbox from "./Checkbox";
import Radio from "./Radio";
import Switch from "./Switch";
import Tooltip from "./Tooltip";
import Palette from "../palette";

export default function ComponentsOverrides(theme: Theme) {
  const paletteComponents = Palette().components;
  return merge(
    paletteComponents,
    Checkbox(theme),
    Radio(theme),
    Switch(theme),
    Tooltip(theme)
  );
}
