import React from "react";
import { Link } from "react-router-dom";

export default function Items({ name, id, image, oldPrice, newPrice }) {
  return (
    <div className="hover:scale-105 transition duration-500 cursor-pointer">
      <div>
        <Link to={`/product/${id}`}><img className="w-[250px]" src={image}></img></Link>
      </div>
      <div>
        <h1 className="w-[225px] py-2">{name}</h1>
      </div>
      <div className="flex gap-4">
        <p className="font-bold">${newPrice}</p>
        <p className="line-through text-gray-500">${oldPrice}</p>
      </div>
    </div>
  );
}
