import React from "react";
import logo2 from "./assets/Assets/logo2.png";
import insta from "./assets/Assets/instagram_icon.png";
import pintrest from "./assets/Assets/pintester_icon.png";
import whatsapp from "./assets/Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-9 py-8">
      <div className="flex items-center gap-7 font-bold text-2xl">
        <img className='w-12' src={logo2}></img>
        <h1 className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-red-600 to-blue-300">CLOTHIFY</h1>
      </div>
      <div>
        <ul className="flex gap-8">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <div>
          <img src={insta}></img>
        </div>
        <div>
          <img src={pintrest}></img>
        </div>
        <div>
          <img src={whatsapp}></img>
        </div>
      </div>
      <div className="w-[80%]">
        <hr className="border-2"></hr>
        <p className="text-sm py-6 text-center -mb-6">
          Copyright@2024 All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
