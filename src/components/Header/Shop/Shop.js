import React, { useState } from 'react';
import fakeData from '../../../fakeData'
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css';
const Shop = () => {
    // console.log(fakeData);
    const firstTenItems= fakeData.slice(0,10);
    const [products,setProducts]=useState(firstTenItems);
    const [cart,setCart]=useState([]);
    const handleProduct = (product)=>{
        console.log('added',product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="Main-container">
          <div className="product-container">
              {
                  products.map(pd=><Product handleProduct={handleProduct}  product={pd}></Product>)
              }
          </div>
          <div className="cart-container">
              <Cart cart={cart}></Cart>
              {/* this is cart
              <h5>item no {cart.length}</h5> */}
          </div>
        </div>
    );
};

export default Shop;   