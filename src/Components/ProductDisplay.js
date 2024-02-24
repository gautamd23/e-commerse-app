import React, { useContext } from "react";
import starIcon from "./assets/Assets/star_icon.png";
import startDull from "./assets/Assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

export default function ProductDisplay({ product }) {

  const {addToCart}  = useContext(ShopContext)

  return (
    <div className="px-16 flex justify-center gap-10 ">
      <div className="grid  grid-flow-col  w-1/2 justify-center ">
        <div className="grid grid-row-5 grid-cols-1 gap-1 h-full">
          <img className="w-[100px] h-[110px]" src={product.image}></img>
          <img className="w-[100px] h-[110px]" src={product.image}></img>
          <img className="w-[100px] h-[110px]" src={product.image}></img>
          <img className="w-[100px] h-[110px]" src={product.image}></img>
          <img className="w-[100px] h-[110px]" src={product.image}></img>
        </div>
        <div className="grid-cols-1 row-span-5 ml-1 ">
          <img className="row-span-5 h-full" src={product.image}></img>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-8">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex  gap-2 -mt-3">
          <div className="flex gap-2">
            <img src={starIcon}></img>
            <img src={starIcon}></img>
            <img src={starIcon}></img>
            <img src={starIcon}></img>
            <img src={startDull}></img>
          </div>
          <div>
            <p>(88)</p>
          </div>
        </div>
        <div className="flex gap-4">
          <p className="font-bold line-through text-gray-500 text-xl">
            ${product.old_price}
          </p>
          <p className="font-bold text-red-600 text-xl">${product.new_price}</p>
        </div>
        <div>
          <p>
            A lightweight, usually knitted, pullover shirt, close- fitting and
            with a round neckline and short sleeves, worn as on undershirt or
            outer garment
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-gray-500 font-bold">Select Size</h2>
          <ul className="flex gap-3 cursor-pointer">
            <li className="py-3 px-6 bg-slate-200 text-sm">S</li>
            <li className="py-3 px-6 bg-slate-200 text-sm">M</li>
            <li className="py-3 px-6 bg-slate-200 text-sm">L</li>
            <li className="py-3 px-6 bg-slate-200 text-sm">XL</li>
            <li className="py-3 px-4 bg-slate-200 text-sm">XXL</li>
          </ul>
        </div>
        <div className="mt-2">
          <button onClick={()=>addToCart(product.id)} className="py-3 px-6 bg-red-600 text-white font-bold">ADD TO CART</button>
        </div>
        <div className="mt-6">
          <p>
            <span className="font-bold">Category : </span>
            {product.category}
          </p>
          <p>
            <span className="font-bold">Tags :</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
}
