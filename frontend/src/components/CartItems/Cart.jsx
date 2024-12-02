import React, { useEffect, useState } from "react";
import "./Cart.css";
import CartMessage from "../CartMessage/CartMessage";

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);

  // Disable page scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const fetchCartItems = async () => {
    try {
      const userId = "672f1920d55a3749fc7b3ec2"; // Replace with actual user ID
      const response = await fetch(`http://localhost:5000/api/cart/${userId}`);
      const data = await response.json();

      if (response.ok) {
        setCartItems(data.cartItems);
        console.log(cartItems[0]);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Failed to fetch cart items", error);
    }
  };

  const removeCartItem = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/remove`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "672f1920d55a3749fc7b3ec2", // Replace with actual user ID
          productId,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCartItems(data.cartItems); // Update state after removal
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Failed to remove item from cart", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        x
      </button>
      <h6>
        SHOPPING CART <span className="noOfCartItem">{cartItems.length}</span>
      </h6>

      {cartItems.length === 0 ? (
        <CartMessage />
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.productId._id}>
              <img src={item.productId.image} alt="image" />
              <div className="cart-item-content">
                <p className="item-title">{item.productId.name}</p>
                <div className="handle-item-price">
                  <div className="item-quantity">
                    <span>-</span>
                    <p>{item.quantity}</p>
                    <span>+</span>
                  </div>
                  <div className="item-price">
                    <p className="item-price">₹ {item.productId.price}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => removeCartItem(item.productId._id)}
                style={{
                  border: "0",
                  outline: "none",
                  padding: "0",
                  cursor: "pointer",
                  position: "absolute",
                  right: "0px",
                  fontFamily: "Roboto",
                  background: "#fff",
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
