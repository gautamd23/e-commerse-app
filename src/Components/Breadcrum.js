import React from 'react'
import arrowIcom from '../Components/assets/Assets/breadcrum_arrow.png'

export default function Breadcrum(props) {
    const {product} = props
  return (
    <div className='flex gap-3 items-center px-16 py-10 text-gray-500 font-bold'>
        HOME <img className="h-4" src={arrowIcom}></img> SHOP <img className="h-4" src={arrowIcom}></img> {product.category} <img className="h-4" src={arrowIcom}></img> {product.name} 
    </div>
  )
}
