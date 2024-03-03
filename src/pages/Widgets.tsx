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
    <Box
      id={"widgets-page"}
      display={"flex"}
      flexDirection={"column"}
      flexGrow={1}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"22px"}
    >
      <Stack
        id={"widgets-card"}
        display={"flex"}
        flexDirection={"column"}
        flexWrap={"wrap"}
        gap={"20px"}
        padding={"36px"}
        style={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: "8px",
          boxShadow:
            "0px 0.7777777910232544px 2.9907407760620117px 0px rgba(0, 0, 0, 0.01), 0px 3.422222137451172px 6.192592620849609px 0px rgba(0, 0, 0, 0.02), 0px 8.399999618530273px 12.350000381469727px 0px rgba(0, 0, 0, 0.03), 0px 16.177778244018555px 24.207406997680664px 0px rgba(0, 0, 0, 0.03), 0px 27.22222137451172px 44.50925827026367px 0px rgba(0, 0, 0, 0.04),0px 42px 76px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Box
          width={"100%"}
          textAlign={"left"}
          style={{ borderBottom: "2px solid grey" }}
        >
          <Typography
            variant="h3"
            style={{
              fontSize: "30px",
              fontWeight: "700",
              paddingBottom: "12px",
            }}
          >
            Per products widgets
          </Typography>
        </Box>
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
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
    </Box>
  );
};
