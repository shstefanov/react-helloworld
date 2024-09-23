import React from "react";

import { createBrowserRouter, Outlet } from "react-router-dom";

import Layout from "./Layout.jsx";
import TestComponent from "components/TestComponent.component.jsx";


export default createBrowserRouter([
  // <Outlet /> means 'children' inside any parent of children components
  { path: "/", element: <Layout />, children: [
      { path: "test", element: <TestComponent /> }
  ]},
]);
