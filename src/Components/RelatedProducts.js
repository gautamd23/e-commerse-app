import React from 'react';
import dataProducts from './assets/Assets/data'
import Items from './Items'

export default function RelatedProducts() {
  return (
    <div className='flex flex-col justify-center items-center gap-14 py-10'>
        <div className=''>
            <h1 className='text-3xl font-bold'>Related Products</h1>
            <hr className="mt-4 font-bold text-black border-2 border-black  text-center"></hr>
        </div>
        <div className='grid grid-cols-4 gap-6'>
            {dataProducts.map((item) =>{
                return <Items key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              oldPrice={item.old_price}
              newPrice={item.new_price} />
            })}
        </div>
    </div>
  )
}
