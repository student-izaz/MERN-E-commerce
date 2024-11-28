// controllers/cartController.js
const Cart = require('../models/Cart');
const Products = require('../models/Product');

// Add to Cart
exports.addToCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, products: [{ productId, quantity: 1 }] });
    } else {
      const productIndex = cart.products.findIndex((p) => p.productId.equals(productId));
      if (productIndex > -1) {
        cart.products[productIndex].quantity += 1;
      } else {
        cart.products.push({ productId, quantity: 1 });
      }
    }
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// Remove from Cart
exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: 'Cart not found' });

    cart.products = cart.products.filter((p) => !p.productId.equals(productId));
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

exports.getCartItems = async (req, res) => {
  const {cartItemsIds} = req.params;
  console.log(cartItemsIds)
  try {
    const products = await Products.findById(cartItemsIds) 
    res.status(200).json({msg: "get cart items", products});
  } catch (error) {
    res.status(500).json({msg: "dont get cart item",error})
  }
}
