import React from "react";
import exclusive from "./assets/Assets/exclusive_image.png";
export default function Offers() {
  return (
    <div className="flex  gap-48 px-8 justify-center my-10 mx-36 pt-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <div className="pt-6">
        <h1 className="text-4xl my-3 font-bold">Exclusive</h1>
        <h1 className="text-4xl font-bold">Offers For You</h1>
        <p className="text-sm my-3 font-bold">ONLY ON BEST SELLER PRODUCTS</p>
        <button className="bg-red-500 rounded-full py-1 px-5  text-white">
          Check Now{" "}
        </button>
      </div>
      <div>
        <img className="w-[200px]" src={exclusive}></img>
      </div>
    </div>
  );
}
