import React, { createContext, useState } from "react";
import allProducts from "../Components/assets/Assets/all_product";

export const ShopContext = createContext(null);
function getDefaultCart() {
  let cart = {};
  for (let i = 0; i < allProducts.length; i++) {
    cart[i] = 0;
  }
  return cart;
}
const ShopContextProvider = (props) => {
  //console.log(contextValue);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  function addToCart(itemId) {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  }
  function removeFromCart(itemId) {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  }


  function getTotalAmount() {
    let amount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => product.id === Number(item));
        
        amount += itemInfo.new_price * cartItems[item];
      }
      
    }
    return amount;
  }

  function getTotalCartItems() {
    let totalItem = 0;
    for(const item in cartItems) {
        if(cartItems[item]>0) {
            totalItem += cartItems[item]
        }
    }
    return totalItem
  }

  const contextValue = {
    allProducts,
    addToCart,
    removeFromCart,
    cartItems,
    getTotalAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
