import React from 'react';
import jorgen from '../images/jogren.png';

export default function Home() {
    return (
      <div className='main-content'>
        <div className="App-header"></div>
        <div className="main-padding">
            <h1>This is the Home page</h1>
            <div className="product-card">
                <div className="product-card-img">
                    <img className="product-card-img" src={jorgen} alt="oops"></img>
                </div>
                <div className="product-card-details">
                    <div className="product-details">
                        <h2 className="product-name">Test product</h2>
                        <p className="product-price">$0.00</p>
                    </div>
                    <div className="product-card-atc">
                        <h3 className="product-add">Add Item</h3>
                        <p>+</p>
                    </div>
                </div>
            </div>
        </div>       
      </div>
    );
}