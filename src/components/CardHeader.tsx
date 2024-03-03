import { Box, Typography, useTheme } from "@mui/material";
import { ReactComponent as GreensparkLogo } from "../assets/greenspark-logo.svg";
import { Widget } from "../types";

const darkLogo = ["white", "cream"];

interface HeaderProps {
  background: string;
  widget: Widget;
}
export const CardHeader = ({ background, widget }: HeaderProps) => {
  const theme = useTheme();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: background,
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
        <Typography fontSize={"12px"}>This product {widget.action}</Typography>

        <Typography fontSize={"18px"}>
          {widget.amount} {widget.type}
        </Typography>
      </Box>
    </Box>
  );
};
