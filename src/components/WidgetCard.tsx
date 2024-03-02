import { Widget } from "../types";
import { ReactComponent as GreensparkLogo } from "../assets/greenspark-logo.svg";
import { ReactComponent as TooltipIcon } from "../assets/info_outline.svg";
import { useDispatch } from "react-redux";
import {
  updateWidgets,
  updateActiveWidget,
} from "../store/reducers/widgetsSlice";
import { Checkbox, Radio, RadioGroup, Switch, Tooltip } from "@mui/material";

const colours = {
  blue: "#2E3A8C",
  green: "#3B755F",
  cream: "#F2EBDB",
  white: "#FFFFFF",
  black: "#212121",
};

const tooltipString =
  "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.";

const reverseColours: Record<string, string> = {};
for (const [colorName, hexValue] of Object.entries(colours)) {
  reverseColours[hexValue] = colorName;
}

export const WidgetCard = ({ widget }: { widget: Widget }) => {
  const dispatch = useDispatch();

  const handleButtonClick = (newState: boolean) => {
    const updatedWidget = { ...widget, linked: newState };
    dispatch(updateWidgets(updatedWidget));
  };

  const handleActiveClick = () => {
    const updatedWidget = { ...widget, active: !widget.active };
    dispatch(updateActiveWidget(updatedWidget));
  };

  const handleColourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("color event", event);
    const hexValue = event.target.value;
    const colorName = reverseColours[hexValue];
    const updatedWidget = { ...widget, selectedColor: colorName };
    dispatch(updateWidgets(updatedWidget));
  };

  const controlProps = (item: string) => {
    const selected = widget.selectedColor as keyof typeof colours;
    const isChecked = colours[selected] === item;
    return {
      checked: isChecked,
      onChange: handleColourChange,
      value: item,
      name: "color-radio-button-demo",
      inputProps: { "aria-label": item },
    };
  };

  return (
    <div
      style={{
        width: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "24px",
          backgroundColor:
            colours[widget.selectedColor as keyof typeof colours],
        }}
      >
        <GreensparkLogo />
      </div>
      <h4>{widget.id}</h4>
      <h4>
        {widget.amount} {widget.type}
      </h4>
      <h4>{widget.action}</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <h4 style={{ color: !!widget.linked ? "green" : "red" }}>
          Link to public profile
        </h4>
        <Tooltip
          title={
            <>
              <p>{tooltipString}</p>
              <a href={"/"}>View profile</a>
            </>
          }
        >
          <TooltipIcon />
        </Tooltip>
        <Checkbox
          checked={!!widget.linked}
          onClick={() => handleButtonClick(!widget.linked)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <h4>Badge colour</h4>
        <div>
          <Radio
            {...controlProps(colours.green)}
            sx={{
              color: colours.green,
              "&.Mui-checked": {
                color: colours.green,
              },
            }}
          />
          <Radio
            {...controlProps(colours.blue)}
            sx={{
              color: colours.blue,
              "&.Mui-checked": {
                color: colours.blue,
              },
            }}
          />
          <Radio
            {...controlProps(colours.cream)}
            sx={{
              color: colours.cream,
              "&.Mui-checked": {
                color: colours.cream,
              },
            }}
          />
          <Radio
            {...controlProps(colours.white)}
            sx={{
              color: "grey",
              "&.Mui-checked": {
                color: "grey",
              },
            }}
          />
          <Radio
            {...controlProps(colours.black)}
            sx={{
              color: colours.black,
              "&.Mui-checked": {
                color: colours.black,
              },
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <h4 style={{ color: !!widget.active ? "green" : "red" }}>
          Activate badge {widget.active.toString()}
        </h4>
        <Switch checked={!!widget.active} onClick={handleActiveClick} />
      </div>
    </div>
  );
};
