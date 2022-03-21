import React, { Component } from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

class Navigation extends Component{

    searchClose() {
        document.getElementByName("search").txt.value='';
    };

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
                        <div className='search-field'>
                            <form name="search" style={{padding:'0 2vw', position:'relative'}}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} class='fai'/>
                                <div className="search-close" onClick={searchClose()}>X</div>
                                <input type="text" class="input" name="txt" onmouseout="document.search.txt.value = ''"/>
                            </form> 
                        </div>
                    </li>            
                </ul>
            </nav>
            
        );
    }
}

export default Navigation;