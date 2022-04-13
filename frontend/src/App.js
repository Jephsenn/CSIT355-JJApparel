import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.jsx'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Login from './components/Login'
import Register from './components/Register'
import {Routes, Route, Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="App">    
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>    
      <Outlet/>     
    </div>
  );
}