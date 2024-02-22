import React, { useContext } from 'react'
import ShopContextProvider, { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay'

export default function Product() {
  const {allProducts} = useContext(ShopContext)
  const {productId} = useParams()
  const product = allProducts.find((e)=> e.id === Number(productId))
  console.log(product)

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}
