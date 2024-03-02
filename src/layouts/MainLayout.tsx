import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeApp } from "../store/actions";

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        flexGrow: 1,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default MainLayout;
