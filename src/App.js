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
import Footer from "./Components/Footer";
import ShopContextProvider from "./Context/ShopContext";

function App() {
  return (
    <Provider store={appStore}>
      <ShopContextProvider>
        <div className="">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ShopContextProvider>
    </Provider>
  );
}

export default App;
