import React from 'react';
import './Cart.css'
import SvgReturn from '../../SvgReturn';

const Cart = ({ cart, handleClearCart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = (totalPrice * 0.07);
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} type="button" className='btn-clear-cart'>
                <span>Clear Cart</span>
                <SvgReturn></SvgReturn>
            </button>
        </div>
    );
};

export default Cart;