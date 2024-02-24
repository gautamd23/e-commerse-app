import React from "react";

export default function DescriptionBox() {
  return (
    <div className="px-16 py-24 flex flex-col justify-center" >
      <div className="flex ">
        <h1 className="py-4 px-8 border-2 cursor-pointer">Description</h1>
        <h1 className="py-4 px-8 bg-gray-100 border-2 cursor-pointer">Reviews(88)</h1>
      </div>
      <div className="py-6  px-8 border-2">
        <p>
          e-commerce website is an online platform that facilitates the buying
          and selling of products or services over the internet. It serves as a
          virtual marketplace where businesses and individuals can showcase
          their products, interact with customers, and conduct transactions
          without the need for a physical presence. E-commerce websites have
          gained immense popularity due to their convenience, accessibility, and
          the global reach they offer.
        </p>
        <p className="pt-4">
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g. sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
}
