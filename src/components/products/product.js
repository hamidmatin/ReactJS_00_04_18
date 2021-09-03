import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions'
const Product = ({product}) => {
  const dispatch = useDispatch()

  return (
    <div>
      <img src={product.image} alt='sd' style={{width: '150px'}}/>
      <span>name : {product.name}, </span>
      <span>price : {product.price}</span> {' '}
      <button onClick={()=>{dispatch(addToCart(product))}}>Add to Cart</button>
    </div>
  )
}

export default Product
