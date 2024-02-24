import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import removeIcon from "./assets/Assets/cart_cross_icon.png";

export default function CartItems() {
  const { allProducts, cartItems, removeFromCart,getTotalAmount  } = useContext(ShopContext);

  return (
    <div className="flex flex-col  justify-center  py-16 w-full px-20">
      <div className="grid grid-cols-7 justify-between gap-3 font-bold text-gray-600 pb-3">
        <h1>Product</h1>
        <h1 className="col-span-2">Title</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
        <h1>Remove</h1>
      </div>
      <hr className="border-2"></hr>

      <div className="flex flex-col justify-between">
        {allProducts?.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <>
                <div className="grid grid-cols-7 justify-between gap-6 items-center py-4">
                  <div>
                    <img className="w-12" src={e.image}></img>
                  </div>
                  <div className="col-span-2">
                    <p>{e.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">${e.new_price}</p>
                  </div>
                  <div>
                    <p>{cartItems[e.id]}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">
                      ${e.new_price * cartItems[e.id]}
                    </p>
                  </div>
                  <div>
                    <img
                      className="cursor-pointer"
                      onClick={() => removeFromCart(e.id)}
                      src={removeIcon}
                    ></img>
                  </div>
                </div>
                <hr className="border-2"></hr>
              </>
            );
          }
          return null
        })}
      </div>
      <div className="flex gap-20 justify-between  py-16">
        <div className="flex flex-col w-1/3">
            <h1 className="text-2xl font-bold py-4">Cart Totals</h1>
            <div className="flex justify-between py-3">
                <p>SubTotal</p>
                <p>${getTotalAmount()}</p>
                
            </div>
            <hr className="border-2"></hr>
            <div className="flex justify-between py-3">
            <p>Shopping Fee</p>
            <p>Free</p>
            </div>
            <hr className="border-2"></hr>
            <div className="flex justify-between py-3 font-bold">
                <p>Total</p>
                <p>${getTotalAmount()}</p>
            </div>
            <div className="py-6">
                <button className="py-3 px-4 bg-red-600 text-white ">PROCEED TO CHECKOUT</button>
            </div>
        </div>
        <div className="w-1/2">
            <p className="py-3 text-gray-600 ">If you have a promo code, Enter it here</p>
            <div className="py-3 flex">
                <input className="py-3 px-3 bg-gray-100 w-[70%]" type="text" placeholder="Promo code "></input>
                <button className="py-3 px-4 bg-black text-white">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}
