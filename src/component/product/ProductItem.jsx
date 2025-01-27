import React from 'react'
import "../product/ProductItem.css"
const ProductItem = ({title,price,img}) => {
  return (
    <div className='product-contain col-4 mg-5'>
      <div className="contain-product-item">
        <div className="contain-img-name">
        <img src={img} alt="" className="product-img-item" />
        <p className="name-product"> {title}</p>
        </div>
  
        <p className="price-product">{price}</p>
      </div>
       
    </div>
  )
}

export default ProductItem