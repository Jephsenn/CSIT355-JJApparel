import React, { Component } from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import SearchForm from './SearchForm';

class Navigation extends Component{

    render(){
        return(
            <nav className="Navigation main-padding">
                <h1 className="Brand"><NavLink to="/" style={{textDecoration: 'none', color: 'unset'}}>JJ Apparel</NavLink></h1>
                <ul className="Tabs">
                    <li><NavLink activeClassName='active' to="home">Home</NavLink></li>
                    <li><NavLink activeClassName='active' to="about">About</NavLink></li>
                    <li><NavLink activeClassName='active' to="shop">Shop</NavLink></li>
                    <li><NavLink activeClassName='active' to="login">Login</NavLink></li>   
                    <li> 
                        <SearchForm/>
                    </li>            
                </ul>
            </nav>
            
        );
    }
}

export default Navigation;