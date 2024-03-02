import MainLayout from "../layouts/MainLayout";
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
