import { ReactComponent as TooltipIcon } from "../assets/info_outline.svg";

import { Box, Checkbox, Tooltip, Typography, useTheme } from "@mui/material";

const tooltipString =
  "This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.";

export const LinkToProfile = ({
  linked,
  handleProfileClick,
}: {
  linked: boolean;
  handleProfileClick: (newState: boolean) => void;
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
                rel="noreferrer"
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
          checked={!!linked}
          onClick={() => handleProfileClick(!linked)}
        />
      </Box>
    </Box>
  );
};
