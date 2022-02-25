import React from 'react';
import ProductCard from './ProductCard';

export default function Home() {
    return (
      <div className='main-content'>
        <div className="App-header"></div>
        <div className="main-padding">
            <h1>This is the Home page</h1>
            <div className="card-container">
                <ProductCard name="Test Product" price="$0.00"/>
                <ProductCard name="Test Product" price="$0.00"/>
                <ProductCard name="Test Product" price="$0.00"/>
            </div>
        </div>       
      </div>
    );
}