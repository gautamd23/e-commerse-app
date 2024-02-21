import React from "react";
import newCollection from "./assets/Assets/new_collections";
import Items from "./Items";

export default function NewCollections() {
  return (
    <div className="flex flex-col justify-center items-center gap-14 py-20 ">
      <div>
        <h1 className="text-3xl font-bold">NEW COLLECTIONS</h1>
        <hr className="mt-4 font-bold text-black border-2 border-black  text-center"></hr>
      </div>
      <div className="grid grid-cols-4 gap-6"> 
        {newCollection.map((item) => {
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
