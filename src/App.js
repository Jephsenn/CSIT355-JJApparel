import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation.jsx'
import Home from './components/Home'
import About from './components/About'
import {Routes, Route, Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="App">    
    <Navigation/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>    
      <Outlet/>     
        {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}  
    </div>
  );
}