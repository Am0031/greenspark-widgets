import { Box, Radio, Typography, useTheme } from "@mui/material";

export const colours = {
  blue: "#2E3A8C",
  green: "#3B755F",
  cream: "#F2EBDB",
  white: "#FFFFFF",
  black: "#212121",
};

export const BadgeColour = ({
  widgetColour,
  handleColourChange,
}: {
  widgetColour: string;
  handleColourChange: (e: any) => void;
}) => {
  const controlProps = (item: string) => {
    const selected = widgetColour as keyof typeof colours;
    const isChecked = colours[selected] === item;
    return {
      checked: isChecked,
      onChange: handleColourChange,
      value: item,
      name: "color-radio-button-demo",
      inputProps: { "aria-label": item },
    };
  };

  const UncheckedIcon = ({ color }: { color: string }) => (
    <Box sx={{ width: "16px", height: "16px", border: `2px solid ${color}` }}>
      <Box
        sx={{ width: "12px", height: "12px", backgroundColor: `${color}` }}
      ></Box>
    </Box>
  );

  const CheckedIcon = ({ color }: { color: string }) => (
    <Box
      sx={{
        width: "16px",
        height: "16px",
        border: `2px solid ${theme.palette.secondary.light}`,
      }}
    >
      <Box
        sx={{ width: "12px", height: "12px", backgroundColor: `${color}` }}
      ></Box>
    </Box>
  );
  const theme = useTheme();
  return (
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
        {Object.entries(colours).map(([key, value]) => (
          <Radio
            key={key}
            {...controlProps(value)}
            icon={<UncheckedIcon color={value} />}
            checkedIcon={<CheckedIcon color={value} />}
            sx={{
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
