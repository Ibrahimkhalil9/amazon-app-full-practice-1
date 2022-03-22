import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { product, addToCart } = props
    const { img, name, price, ratings, seller } = product
    return (
        <div className='list-items'>
            <img src={img} alt="" />
            <div className="list-info">
                <h4 className='fonting'>{name}</h4>
                <p>price:${price}</p>
                <p>Seller:{seller}</p>
                <p>ratings:{ratings}star</p>
            </div>
            <button onClick={() => addToCart(product)} className='button'><p className='font'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;