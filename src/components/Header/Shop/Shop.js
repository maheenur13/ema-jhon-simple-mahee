import React, { useState } from 'react';
import fakeData from '../../../fakeData'
import './Shop.css';
const Shop = () => {
    console.log(fakeData);
    const firstTenItems= fakeData.slice(0,10);
    const [products,setProducts]=useState(firstTenItems);

    return (
        <div className="Main-container">
          <div className="product-container">
          <ul>
              {
                  products.map(product=><li>{product.name}</li>)
              }

          </ul>
          </div>
          <div className="cart-container">
              this is cart
          </div>
        </div>
    );
};

export default Shop;   