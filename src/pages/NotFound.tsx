import { Box, Typography } from "@mui/material";
import error404 from "../assets/Error404.png";

export const NotFound = () => {
  return (
    <>
      <Box sx={{ width: { xs: 250, sm: 590 }, height: { xs: 130, sm: 300 } }}>
        <img
          src={error404}
          alt="mantis"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Typography variant={"h2"}>Page not found</Typography>
    </>
  );
};
