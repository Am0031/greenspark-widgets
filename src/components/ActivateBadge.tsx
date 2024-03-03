import { Box, Switch, Typography, useTheme } from "@mui/material";
export const ActivateBadge = ({
  active,
  handleActiveClick,
}: {
  active: boolean;
  handleActiveClick: () => void;
}) => {
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
        Activate badge
      </Typography>
      <Switch checked={!!active} onClick={handleActiveClick} />
    </Box>
  );
};
