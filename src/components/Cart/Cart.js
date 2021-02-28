import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log("cart",cart);
    const totalPrice= cart.reduce((total,prod)=>total+prod.price,0)
    let shipping =0;
    if(totalPrice>35){
        shipping=0;
    }
    else if(totalPrice>15){
        shipping=4.55;
    }
    else if(totalPrice>0){
        shipping=12.55;
    }
    const tax = Number((totalPrice/10).toFixed(2));
    const grandTotal =Math.round(totalPrice+shipping+tax);
    return (
        <div>
            <h1>Order Summery</h1>
            <p>Items ordered : {cart.length}</p>
            <p>Product Price : {Number((totalPrice).toFixed(2))}</p>
            <p>tax : {tax}</p>
            <p>shipping cost : {Number(shipping.toFixed(2))}</p>
            <p>Total Amount : {grandTotal}</p>
        </div>
    );
};

export default Cart;