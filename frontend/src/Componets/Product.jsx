import React from 'react'
import { useParams } from 'react-router-dom'


function Product() {
    const {slug}=useParams()   
  return (
    <div>Product {slug}</div>  
  )
}

export default Product