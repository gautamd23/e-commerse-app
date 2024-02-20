import React, { useState } from "react";
import logo from "../assets/Assets/logo.png";
import cartImg from "../assets/Assets/cart_icon.png";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="flex items-center justify-center px-5 shadow-md py-3 gap-56">
      <div className="flex items-center gap-4 text-3xl">
        <img src={logo}></img>
        <h1>Shopify</h1>
      </div>
      <div>
        <ul
          className="flex gap-11 text-xl"
        >
          <li onClick = {()=>setMenu("shop")} className={`${menu === "shop" ?" underline" :""} font-bold  
              hover:underline   
              hover:text-gray-500 
              
              hover:duration-300  
              cursor-pointer`}>
            Shop
            
          </li>
          <li onClick = {()=>setMenu("men")} className={`${menu === "men" ?" underline" :""} font-bold  
              hover:underline   
              hover:text-gray-500 
              
              hover:duration-300  
              cursor-pointer`}>Men</li>
          <li onClick = {()=>setMenu("women")} className={`${menu === "women" ?" underline" :""} font-bold  
              hover:underline   
              hover:text-gray-500 
              
              hover:duration-300  
              cursor-pointer`}>Women</li>
          <li onClick = {()=>setMenu("kids")} className={`${menu === "kids" ?" underline" :""} font-bold  
              hover:underline   
              hover:text-gray-500 
              
              hover:duration-300  
              cursor-pointer`}>Kids</li>
        </ul>
      </div>
    
      <div className="flex gap-11">
        <img src={cartImg}></img>
        <div className="absolute ml-10 -mt-2 bg-red-600 rounded-full px-2 text-white">
          0
        </div>
        <button className="py-1 px-3 bg-black rounded-full text-white text-sm ">
          Login
        </button>
      </div>
    </div>
  );
}
