import React, { useContext, useState } from "react";
import logo from "../assets/Assets/logo.png";
import cartImg from "../assets/Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className="flex items-center justify-center px-5 shadow-md py-3 gap-56">
      <div className="flex items-center gap-4 text-3xl">
        <img src={logo}></img>
        <h1>Shopify</h1>
      </div>
      <div>
        <ul className="flex gap-11 text-xl">
          <li
            onClick={() => setMenu("shop")}
            className={`${menu === "shop" ? " underline" : ""} font-bold  
              hover:underline   
              hover:text-gray-500 
              
              hover:duration-300  
              cursor-pointer`}
          >
            <Link to="/">Shop</Link>
          </li>
          <li
            onClick={() => setMenu("men")}
            className={`${menu === "men" ? " underline" : ""} font-bold  
              hover:underline   
              hover:text-gray-500 
              
              hover:duration-300  
              cursor-pointer`}
          >
            <Link to="/mens">Men</Link>
          </li>
          <li
            onClick={() => setMenu("women")}
            className={`${menu === "women" ? " underline" : ""} font-bold  
              hover:underline   
              hover:text-gray-500 
              
              hover:duration-300  
              cursor-pointer`}
          >
            <Link to="/womens">Women</Link>
          </li>
          <li
            onClick={() => setMenu("kids")}
            className={`${menu === "kids" ? " underline" : ""} font-bold  
              hover:underline   
              hover:text-gray-500 
              
              hover:duration-300  
              cursor-pointer`}
          >
            <Link to="/kids">Kids</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-11 items-center">
      <Link to="/cart"><img src={cartImg}></img></Link>
        <div className="absolute ml-8 -mt-8 bg-red-600 rounded-full px-2 text-white">
          {getTotalCartItems()}
        </div>
        <Link to="/login"><button className="py-2 px-4 bg-black rounded-full text-white text-sm ">
          Login
        </button></Link>
      </div>
    </div>
  );
}
