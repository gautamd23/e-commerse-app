import React from "react";

export default function ProductDisplay({ product }) {
  return (
    <div className="px-10 flex justify-center gap-7">
      <div className="grid  grid-flow-col  w-[600px] ">
        <div className="grid grid-row-5 grid-cols-1 gap-2 h-full">
          <img className="w-[100px] h-[110px]" src={product.image}></img>
          <img className="w-[100px] h-[110px]" src={product.image}></img>
          <img className="w-[100px] h-[110px]" src={product.image}></img>
          <img className="w-[100px] h-[110px]" src={product.image}></img>
          <img className="w-[100px] h-[110px]" src={product.image}></img>
          
        </div>
        <div className="grid-cols-1 row-span-5 ml-1">
          <img className="row-span-5 h-full" src={product.image}></img>
        </div>
      </div>
      <div>
        <h1>{product.name}</h1>
        <p></p>
        <div className="flex gap-4">
          <p>{product.new_price}</p>
          <p>{product.old_price}</p>
        </div>
      </div>
    </div>
  );
}
