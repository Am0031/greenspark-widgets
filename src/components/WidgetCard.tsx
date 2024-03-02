import { Widget } from "../types";
import { ReactComponent as GreensparkLogo } from "../assets/greenspark-logo.svg";
import { ReactComponent as TooltipIcon } from "../assets/info_outline.svg";
import { useDispatch } from "react-redux";
import {
  updateWidgets,
  updateActiveWidget,
} from "../store/reducers/widgetsSlice";
import {
  Box,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";

const colours = {
  blue: "#2E3A8C",
  green: "#3B755F",
  cream: "#F2EBDB",
  white: "#FFFFFF",
  black: "#212121",
};
const darkLogo = ["white", "cream"];

const tooltipString =
  "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.";

const reverseColours: Record<string, string> = {};
for (const [colorName, hexValue] of Object.entries(colours)) {
  reverseColours[hexValue] = colorName;
}

export const WidgetCard = ({ widget }: { widget: Widget }) => {
  const theme = useTheme();
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
    <Stack
      style={{
        width: "221px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor:
            colours[widget.selectedColor as keyof typeof colours],
          gap: "12px",
          borderRadius: "6px",
        }}
      >
        <Box
          style={{
            padding: "8px 0 4px 12px",
          }}
        >
          <GreensparkLogo
            style={{
              fill: darkLogo.includes(widget.selectedColor)
                ? theme.palette.primary.main
                : theme.palette.background.paper,
            }}
          />
        </Box>
        <Box
          color={
            darkLogo.includes(widget.selectedColor)
              ? theme.palette.primary.main
              : theme.palette.background.paper
          }
          display={"flex"}
          flexDirection={"column"}
          textAlign={"left"}
          justifyContent={"center"}
        >
          <Typography fontSize={"12px"}>
            This product {widget.action}
          </Typography>

          <Typography fontSize={"18px"}>
            {widget.amount} {widget.type}
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <Typography style={{ color: theme.palette.primary.main }}>
            Link to public profile
          </Typography>
          <Tooltip
            title={
              <>
                <p>{tooltipString}</p>
                <a
                  target={"_blank"}
                  href={
                    "https://join.com/companies/getmads/10664571-senior-frontend-engineer"
                  }
                >
                  View profile
                </a>
              </>
            }
          >
            <TooltipIcon
              height={"12px"}
              width={"12px"}
              style={{ fill: theme.palette.primary.main }}
            />
          </Tooltip>
        </Box>
        <Box>
          <Checkbox
            checked={!!widget.linked}
            onClick={() => handleButtonClick(!widget.linked)}
          />
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography style={{ color: theme.palette.primary.main }}>
          Badge colour
        </Typography>
        <Box display={"flex"} flexDirection={"row"} gap={"4px"}>
          <Radio
            {...controlProps(colours.green)}
            sx={{
              color: colours.green,
              "&.Mui-checked": {
                color: colours.green,
              },
              "&:hover": {
                opacity: 0.8,
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
              "&:hover": {
                opacity: 0.8,
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
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />
          <Radio
            {...controlProps(colours.white)}
            sx={{
              color: colours.white,
              "&:hover": {
                opacity: 0.8,
              },
              "&.Mui-checked": {
                color: colours.white,
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
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography style={{ color: theme.palette.primary.main }}>
          Activate badge
        </Typography>
        <Switch checked={!!widget.active} onClick={handleActiveClick} />
      </Box>
    </Stack>
  );
};
