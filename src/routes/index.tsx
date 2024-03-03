import { useRoutes } from "react-router-dom";
import { FallbackRoute, MainRoutes } from "./mainRoutes";

export default function AllRoutes() {
  return useRoutes([MainRoutes, FallbackRoute]);
}
