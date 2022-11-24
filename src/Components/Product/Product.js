import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, img, price, seller, ratings } = product;
    // const { handleAddToCart } = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Saller: {seller}</p>
                <p><small>Rating: {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                <p className="btn-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;