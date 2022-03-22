import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        const newProduct = [...cart, product]
        setCart(newProduct);
    }
    return (
        <div className='items'>
            <div className="shoe-container">
                {
                    products.map(pd => <Product addToCart={addToCart} key={pd.id} product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>this is cart</h1>
                <h1>cart:{cart.length}</h1>
            </div>


        </div>
    );
};

export default Products;