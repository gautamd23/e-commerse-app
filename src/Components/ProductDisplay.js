import React from "react";

export default function ProductDisplay({ product }) {
  return (
    <div className="px-10 flex justify-center gap-7">
      <div className="grid grid-flow-col w-[600px]">
        <div className="">
          <img className="w-[100px]" src={product.image}></img>
          <img className="w-[100px]" src={product.image}></img>
          <img className="w-[100px]" src={product.image}></img>
          <img className="w-[100px]" src={product.image}></img>
          <img className="w-[100px]" src={product.image}></img>
        </div>
        <div className="">
          <img className="" src={product.image}></img>
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
