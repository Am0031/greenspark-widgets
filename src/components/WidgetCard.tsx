import { Widget } from "../types";
import { useDispatch } from "react-redux";
import {
  updateWidgets,
  updateActiveWidget,
} from "../store/reducers/widgetsSlice";
import { Stack } from "@mui/material";
import { CardHeader } from "./CardHeader";
import { LinkToProfile } from "./LinkToProfile";
import { BadgeColour, colours } from "./BadgeColour";
import { ActivateBadge } from "./ActivateBadge";

const reverseColours: Record<string, string> = {};
for (const [colorName, hexValue] of Object.entries(colours)) {
  reverseColours[hexValue] = colorName;
}

export const WidgetCard = ({ widget }: { widget: Widget }) => {
  const dispatch = useDispatch();

  const handleProfileClick = (newState: boolean) => {
    const updatedWidget = { ...widget, linked: newState };
    dispatch(updateWidgets(updatedWidget));
  };

  const handleActiveClick = () => {
    const updatedWidget = { ...widget, active: !widget.active };
    dispatch(updateActiveWidget(updatedWidget));
  };

  const handleColourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hexValue = event.target.value;
    const colorName = reverseColours[hexValue];
    const updatedWidget = { ...widget, selectedColor: colorName };
    dispatch(updateWidgets(updatedWidget));
  };

  return (
    <Stack
      style={{
        width: "221px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <CardHeader
        background={colours[widget.selectedColor as keyof typeof colours]}
        widget={widget}
      />
      <LinkToProfile
        linked={widget.linked}
        handleProfileClick={handleProfileClick}
      />
      <BadgeColour
        widgetColour={widget.selectedColor}
        handleColourChange={handleColourChange}
      />
      <ActivateBadge
        active={widget.active}
        handleActiveClick={handleActiveClick}
      />
    </Stack>
  );
};
