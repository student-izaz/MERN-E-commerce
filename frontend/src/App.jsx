import React, { useState } from "react";
import Header from "./components/header/Header";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import { Outlet } from "react-router-dom";
import Cart from "./components/CartItems/Cart";
import ContextProvider from "./Store/Context";
import MobileMenu from "./components/MobileMenu/MobileMenu";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <div className="app">
      <ContextProvider>
        <Header toggleCart={toggleCart} toggleMobileMenu={toggleMobileMenu}/>
        <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu}/>
        <Cart isOpen={isCartOpen} onClose={toggleCart} />
        {/* When the cart is open, disable page interactions */}
        {isCartOpen && <div className="overlay" onClick={toggleCart}></div>}
        {isMobileMenuOpen && <div className="overlay" onClick={toggleMobileMenu}></div>}
        <Outlet />
        <BottomMenu />
      </ContextProvider>
    </div>
  );
};

export default App;
