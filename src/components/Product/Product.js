import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props);
    const {name,img,seller,wholePrice,stock}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div style={{marginLeft:'20px'}}>
                <h4 className="product-name">{name}</h4>
                <h5>by: <small>{seller}</small></h5>
                <p>${wholePrice}</p>
                <p>only {stock} left in stock - order soon...</p>
                <button onClick={()=>props.handleProduct(props.product)} className="cart-btn"><FontAwesomeIcon icon={faCartPlus} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;<h1>This is Product</h1>