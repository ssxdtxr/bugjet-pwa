import LoginPage from "@/pages/login";
import { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {path: 'login', index: true, Component: LoginPage}
    ] 
  },
]