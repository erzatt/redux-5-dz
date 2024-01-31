import React from "react"
import { useSelector } from "react-redux"


const Basket = () => {
  const addestProductToBasket = useSelector(state => state.stateProduct.basket)

  return (
    <div className="width">
          {addestProductToBasket.map((product) => (
            <div key={product.payload.id} className="product-block">
                <img src={product.payload.thumbnail} alt="#" className="product-image" />
                <h2>{product.payload.title}</h2>
                <span>{product.payload.description}</span>
                <p>{product.payload.price}$</p>
                <p>stars: {product.payload.rating}</p>
                <p>model: {product.payload.brand}</p>
                <p>quality: {product.payload.category}</p>
            </div>
          ))}
    </div>
  )
}

export default Basket