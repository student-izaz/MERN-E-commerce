import React from "react";
import "./SingleProduct.css";
import { addToCart } from "../../services/cartservice";

const SingleProduct = ({ product }) => {

  const handleAddToCart = async (userId, productId, productName) => {
    const data = await addToCart(userId, productId);
    setcartItemsIds(data.products);
    alert(`Item add in cart : ${productName}`);
  };
  
  <>
    <div className="sub-header">
      <p>{`Home / ${product.name}`}</p>
    </div>
    <div className="site-single-product">
      <div className="single-product-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="single-product-details">
        <h1 className="product-title">{product.name}</h1>
        {/* <p>{product.description}</p> */}
        <h2 className="product-price">
          ₹<span className="org-price">6000</span>₹{product.price}
        </h2>
        <div>
          <h6>YOU SAVE ₹1,000.00 | 10% Discount</h6>
          <hr />
          <p>• 5% Cash Back on Every Order.</p>
          <p>• 10 Days Easy Returns. No Questions Asked.</p>
          <p>• 100% Original & Genuine Product Direct from Brand.</p>
          <hr />
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() =>
            handleAddToCart("672f1920d55a3749fc7b3ec2", item._id, item.name)
          }
        >
          Add To Cart
        </button>
        <div className="category">{`Category : ${product.category}`}</div>
        <div className="trust-badge-box">
          <img src="../assets/Untitled-6.webp" alt="image" />
        </div>
      </div>
    </div>
  </>;
};

export default SingleProduct;
