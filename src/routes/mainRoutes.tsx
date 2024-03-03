import MainLayout from "../layouts/MainLayout";
import { NotFound } from "../pages/NotFound";
import { Widgets } from "../pages/Widgets";

export const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "",
      element: <Widgets />,
    },
    {
      path: "widgets",
      element: <Widgets />,
    },

    //other paths for future extensions
  ],
};

export const FallbackRoute = { path: "*", element: <NotFound /> };
