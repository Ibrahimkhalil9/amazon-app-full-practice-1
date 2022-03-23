import React from 'react';
import './Card.css'

const Card = ({ cart }) => {
    console.log(cart)
    let Total = 0;
    let shipping = 0;
    let Quantity = 0;
    for (const product of cart) {
        Quantity = Quantity + product.quantity;
        Total = Total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((Total * 0.1).toFixed(2));
    const grand = Total + shipping + tax;
    return (
        <div className='cart-container'>
            <h4>Order Summury</h4>
            <p>Selected Items: {Quantity}</p>
            <p>Total Price: $ {Total}</p>
            <p>Total Shipping Charge: $ {shipping}</p>
            <p>Tax: $ {(tax).toFixed(2)}</p>
            <h5>Grand Total: $ {grand}</h5>
        </div>
    );
};

export default Card;