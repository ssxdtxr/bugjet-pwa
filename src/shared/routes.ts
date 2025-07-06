import LoginPage from "@/pages/login";
import { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    index: true,
    path: "/login",
    Component: LoginPage,
  },
]