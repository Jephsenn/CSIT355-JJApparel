import React from 'react';
import jorgen from '../images/JorgenPicture.png';

export default function ProductCard(props) {
    return (
        <a className="product-card" href="./about">
            <div className="product-card-img-container">
                <img className="product-card-img" src={jorgen} alt="oops"></img>
            </div>
            <div className="product-card-details">
                <div className="product-details">
                    <h2 className="product-name">{props.name}</h2>
                    <p className="product-price">{props.price}</p>
                </div>
            </div>
        </a>
    );
}