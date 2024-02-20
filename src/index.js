import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/mens",
        element: <ShopCategory />,
      },
      {
        path: "/womens",
        element: <ShopCategory />,
      },
      {
        path: "/kids",
        element: <ShopCategory />,
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: ":product",
            element: <Product />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginSignUp />,
      }
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
