import logo from "./logo.svg";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  
  return (
    <Provider store={appStore}>
      <div className="">
        <Navbar />
        <Outlet/>
      </div>
    </Provider>
  );
}

export default App;
