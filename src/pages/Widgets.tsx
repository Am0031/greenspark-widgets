import { WidgetCard } from "../components/WidgetCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";

export const Widgets = () => {
  const theme = useTheme();
  const widgets = useSelector((state: RootState) => state.widgets.widgets);

  console.log("data in the widget component", widgets);

  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      gap={"20px"}
      padding={"36px"}
      style={{ backgroundColor: theme.palette.background.paper }}
    >
      <Box
        width={"100%"}
        textAlign={"left"}
        style={{ borderBottom: "2px solid grey" }}
      >
        <Typography
          variant="h3"
          style={{ fontSize: "30px", fontWeight: "700", paddingBottom: "12px" }}
        >
          Per products widgets
        </Typography>
      </Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {widgets &&
          widgets.length > 0 &&
          widgets.map((widget) => (
            <WidgetCard key={widget.id} widget={widget} />
          ))}
      </Box>
    </Stack>
  );
};
