import React from 'react';
import './Cart.css'
import SvgReturn from '../../SvgReturn';
import { Link } from 'react-router-dom';

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
            <h2 className='cart-title'>Order Summary</h2>
            <p className='cart-details'>Selected Items: {quantity}</p>
            <p className='cart-details'>Total Price: ${totalPrice}</p>
            <p className='cart-details'>Shipping: ${totalShipping}</p>
            <p className='cart-details'>Tax: ${tax.toFixed(2)}</p>
            <h4 className='cart-details'>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button onClick={handleClearCart} type="button" className='btn-clear-cart'>
                <span>Clear Cart</span>
                <SvgReturn></SvgReturn>
            </button>
            <button type="button" className='btn-proceed'>
                <Link to='/checkout'>
                    <span>Proceed Order</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24" fill="none">
                        <path d="M20.3299 4.22223H3.67014C2.74653 4.22223 2 4.96876 2 5.8889V18.1111C2 19.0313 2.74653 19.7778 3.67014 19.7778H20.3299C21.2535 19.7778 22 19.0313 22 18.1111V5.8889C22 4.96876 21.2535 4.22223 20.3299 4.22223ZM3.87847 5.8889H20.1215C20.2361 5.8889 20.3299 5.98265 20.3299 6.09723V7.55556H3.67014V6.09723C3.67014 5.98265 3.76389 5.8889 3.87847 5.8889ZM20.1215 18.1111H3.87847C3.76389 18.1111 3.67014 18.0174 3.67014 17.9028V12H20.3299V17.9028C20.3299 18.0174 20.2361 18.1111 20.1215 18.1111ZM8.66667 14.6389V16.0278C8.66667 16.257 8.47917 16.4445 8.25 16.4445H5.75C5.52083 16.4445 5.33333 16.257 5.33333 16.0278V14.6389C5.33333 14.4097 5.52083 14.2222 5.75 14.2222H8.25C8.47917 14.2222 8.66667 14.4097 8.66667 14.6389ZM15.3333 14.6389V16.0278C15.3333 16.257 15.1458 16.4445 14.9167 16.4445H10.1944C9.96528 16.4445 9.77778 16.257 9.77778 16.0278V14.6389C9.77778 14.4097 9.96528 14.2222 10.1944 14.2222H14.9167C15.1458 14.2222 15.3333 14.4097 15.3333 14.6389Z" fill="white" />
                    </svg>
                </Link>
            </button>
        </div>
    );
};

export default Cart;