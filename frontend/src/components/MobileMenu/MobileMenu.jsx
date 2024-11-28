// src/components/CartSidebar.js
import React, { useState, useEffect } from "react";
import "./MobileMenu.css";

const MobileMenu = ({ isOpen, onClose }) => {
  // const { cartItem } = useContext(CartContext);
  const [isMobileMenu, setMobileMenu] = useState('menu')

  // Disable page scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);


  return (
    <div className={`mobile-menu-sidebar ${isOpen ? "open" : ""}`}>
      {/* <button className="close-btn" onClick={onClose}>
        x
      </button>
      <h6>SHOPPING CART <span className="noOfCartItem">0</span></h6> */}

      <div className="mobile-menu-category">
        <div className="menu-options">
          <div className={`mobile-menu ${isMobileMenu == 'menu' ? 'active' : ''}`} onClick={()=>setMobileMenu('menu')}>
            <p>Menu</p>
          </div>
          <div className={`mobile-category ${isMobileMenu == 'category' ? 'active' : ''}`} onClick={()=>setMobileMenu('category')}>
            <p>Category</p>
          </div>
        </div>
        {isMobileMenu == 'menu' ? <MenuList/> : <CategoryList/>}
        
      </div>
    </div>
  );
};

export default MobileMenu;


export const MenuList = () => {
  return (
    <div className="menu-list">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">Sales on Latest Brand</a></li>
        <li><a href="#">Shop By Brand</a></li>
        <li>Fresh Arrival</li>
        <li>Lawn Collection</li>
        <li>Party & Festive Collection</li>
        <li>Winter Collection</li>
        <li><a href="/my-account">Login / Register</a></li>
      </ul>
    </div>
  )
}

export const CategoryList = () => {
  return (
    <div className="menu-list">
      <ul>
        <li>Adan’s Libas Fuchsia Chapter 1</li>
        <li>Alizeh Dhaagay Vol-2</li>
        <li>Alizeh Mehfil-e-Uroos</li>
        <li>Asim Jofa Aira Collection</li>
        <li>Chevron Luxury Lawn Collection</li>
        <li>Charizma Tabeer Silk Edit</li>
        <li>Charizma Vasl Embroidered</li>
        <li>Charizma Dastan-E-Jashan</li>

        <li>Asim Jofa Aira Collection</li>
        <li>Chevron Luxury Lawn Collection</li>
        <li>Charizma Tabeer Silk Edit</li>
        <li>Charizma Vasl Embroidered</li>
        <li>Charizma Dastan-E-Jashan</li>

        <li>Asim Jofa Aira Collection</li>
        <li>Chevron Luxury Lawn Collection</li>
        <li>Charizma Tabeer Silk Edit</li>
        <li>Charizma Vasl Embroidered</li>
        <li>Charizma Dastan-E-Jashan</li>
      </ul>
    </div>
  )
}
