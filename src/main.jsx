/* eslint-disable react/no-unknown-property */
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./home/Home";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/products",
    element:<Products products={Products}/>
  },
  {
    path:"/products/:id",
    element:<ProductDetail products={Products}/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);