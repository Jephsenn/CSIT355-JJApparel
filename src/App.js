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
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>    
      <Outlet/>     
    </div>
  );
}