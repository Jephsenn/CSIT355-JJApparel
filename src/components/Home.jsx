import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
      <div className='main-content'>
        <div className="App-header">
          <h2>Quality Apparel for cheap prices.</h2>
          <Link to="/shop" style={{textDecoration:'none', textShadow:'0 0 5px black', zIndex:'1'}}>
            <div class="box-1">
              <div class="btn btn-one">
                <span>Shop Now</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="main-padding" style={{height:'1200px'}}>
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