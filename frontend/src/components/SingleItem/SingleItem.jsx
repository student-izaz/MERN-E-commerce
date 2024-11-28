import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { addToCart, getCartItems } from "../../services/cartservice";
import { useNavigate } from "react-router-dom";

const SingleItem = ({ products }) => {
  const [cartItemsIds, setcartItemsIds] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = async (userId, productId, productName) => {
    const data = await addToCart(userId, productId);
    setcartItemsIds(data.products);
    alert(`Item add in cart : ${productName}`);
  };


  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  return (
    <div className="single-item-container">
      <ul className="products">
        {products.map((item) => (
          <li className="product" key={item.name}>
            <div className="product-wrapper">
              <div
                className="product-wrapper-img"
                onClick={() => handleImageClick(item._id)}
              >
                <img src={item.image} alt={item.image} />
              </div>
              <div className="product-wrapper-content">
                <h2 className="product-title">{item.name}</h2>
                <span className="price">{`₹ ${item.price}`}</span>
                <button
                  className="add-to-cart-btn"
                  onClick={() =>
                    handleAddToCart(
                      "672f1920d55a3749fc7b3ec2",
                      item._id,
                      item.name
                    )
                  }
                >
                  <CiShoppingCart className="icon" />
                  Add to cart
                </button>
              </div>
            </div>
          </li>
        ))}
        </ul>
    </div>
  );
};

export default SingleItem;
