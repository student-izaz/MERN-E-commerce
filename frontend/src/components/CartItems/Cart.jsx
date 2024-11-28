// src/components/CartSidebar.js
import React, { useEffect, useContext } from "react";
import "./Cart.css";
// import { CartContext } from "../../Store/Context";
import CartMessage from "../CartMessage/CartMessage";

const Cart = ({ isOpen, onClose }) => {
  // const { cartItem } = useContext(CartContext);
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
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        x
      </button>
      <h6>SHOPPING CART <span className="noOfCartItem">0</span></h6>

      <div className="cart-items">
          {/* <div className="cart-item">
            <img src="../../assets/maria-b.webp" alt="" />
            <div className="cart-item-content">
              <p className="item-title">Maria b winter luxe 24 | dl-01</p>
              <div className="handle-item-price">
                <div className="item-quantity">
                  <span>-</span>
                  <p>1</p>
                  <span>+</span>
                </div>
                <div className="item-price">
                  <p className="item-price">₹ 8878</p>
                </div>
              </div>
            </div>
          </div> */}
      </div>
      <CartMessage/>
    </div>
  );
};

export default Cart;
