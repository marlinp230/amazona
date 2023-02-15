import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

function Home() {
  return (
    <div>
                <h1>list products</h1>

<div className="products">
  {
    data.products.map((product, index) => (
      <div key={index} className='product'>
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} alt="" />
        </Link>
        <div className="product-info">
          <Link to={`/product/${product.slug}`}>
            <p>{product.name}</p>
          </Link>

          <p> <strong>${product.price}</strong></p>
          <button>Add to cart</button>
        </div>
      </div>

    ))
  }
</div>
    </div>
  )
}

export default Home