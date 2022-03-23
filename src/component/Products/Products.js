import React, { useEffect, useState } from 'react';
import { addToDb, getToTheCard } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log("i am searching product")
            })
    }, [])

    useEffect(() => {
        console.log("ami paisi products from local", products)
        const getLocalStorage = getToTheCard();
        const savedCard = [];
        for (const id in getLocalStorage) {
            const product = products.find(product => product.id === id);
            if (product) {
                const Quantity = getLocalStorage[id];
                product.quantity = Quantity;
                savedCard.push(product)
            }
        }
        setCart(savedCard);
    }, [products])




    const addToCart = (product) => {
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id);
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            const rest = cart.filter(pd => pd.id !== product.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }

        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='items'>
            <div className="shoe-container">
                {
                    products.map(pd => <Product addToCart={addToCart} key={pd.id} product={pd}></Product>)
                }
            </div>
            <div className="cart-container">
                <Card cart={cart}></Card>
            </div>


        </div>
    );
};

export default Products;