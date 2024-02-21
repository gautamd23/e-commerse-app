import React from "react";
import data from "./assets/Assets/data";
import Items from "./Items";
export default function Popular() {
  return (
    <div className="flex flex-col justify-center items-center gap-14 py-20 ">
      <div>
        <h1 className="text-3xl font-bold">POPULAR IN WOMENS</h1>
        <hr className="mt-4 font-bold text-black border-2 border-black  text-center"></hr>
      </div>
      <div className="flex gap-6">
        {data.map((item) => {
          return (
            <Items
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              oldPrice={item.old_price}
              newPrice={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
}
