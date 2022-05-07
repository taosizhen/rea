import { Component, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes
} from "react-router-dom";
import router from "../router";

function routerView() {
  return <>{useRoutes(router)}</>;
}
export default routerView;
