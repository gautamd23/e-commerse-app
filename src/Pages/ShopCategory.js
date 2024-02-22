import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Items from "../Components/Items";
import dropIcon from "../Components/assets/Assets/dropdown_icon.png";

export default function ShopCategory(props) {
  const { allProducts } = useContext(ShopContext);
  console.log(allProducts);
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex justify-center">
        <img className="" src={props.banner}></img>
      </div>
      <div>
        <div className="flex justify-between items-center py-6">
          <p>
            <span className="font-bold">Showing 1-12</span> out of 36 products
          </p>
          <button className="py-2 px-3 rounded-full border flex">
            Sort By <img src={dropIcon} className="pt-2 w-3 mx-1"></img>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {allProducts.map((item) => {
            if (item.category === props.category)
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
      <div className="py-2 px-3 mt-20 mb-16 cursor-pointer bg-gray-300 w-[150px] text-center rounded-full">
          Explore More
        </div>
    </div>
  );
}
