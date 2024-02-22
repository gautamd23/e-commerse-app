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
import menBanner from "./Components/assets/Assets/banner_mens.png";
import womenBanner from "./Components/assets/Assets/banner_women.png";
import kidsBanner from "./Components/assets/Assets/banner_kids.png";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext";
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
        element: <ShopCategory banner={menBanner} category="men" />,
      },
      {
        path: "/womens",
        element: <ShopCategory banner={womenBanner} category="women" />,
      },
      {
        path: "/kids",
        element: <ShopCategory banner={kidsBanner} category="kid" />,
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: ":productId",
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
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
    
  </React.StrictMode>
);
