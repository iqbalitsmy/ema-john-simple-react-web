import React from 'react';
import './ReviewItem.css'
import SvgReturn from '../../SvgReturn';

const ReviewItem = ({ product, handleRemoveCart}) => {
    const { _id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='btn-delete'
            onClick={() => handleRemoveCart(_id)}
            ><SvgReturn></SvgReturn></button>
        </div>
    );
};

export default ReviewItem;