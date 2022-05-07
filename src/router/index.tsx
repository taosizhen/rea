import { lazy, ReactNode, Suspense } from "react";
import { RouteObject } from "react-router-dom";
const DashBoard = lazy(() => import("../views/dashBoard"));
import Layout from "../components/layout";
const ErrorPage = lazy(() => import("../views/error"));
const Login = lazy(() => import("../views/Login"));
const loazLoad = (children: ReactNode) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: loazLoad(<DashBoard />)
      }
    ]
  },
  {
    path: "/login",
    element: loazLoad(<Login />)
  },
  {
    path: "*",
    element: loazLoad(<ErrorPage />)
  }
];
export default routes;
