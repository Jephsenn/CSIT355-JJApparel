import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class Navigation extends Component{
    render(){
        return(
            <nav className="Navigation main-padding">
                <h1 className="Brand">JJ Apparel</h1>
                <ul className="Tabs">
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="login">Login</Link></li>               
                </ul>
            </nav>
            
        );
    }
}

export default Navigation;