// routes/cartRoutes.js
const express = require('express');
const { addToCart, removeFromCart, getCartItems } = require('../controllers/cartController');
const router = express.Router();

router.post('/add', addToCart);
router.post('/remove', removeFromCart);
router.get('/:cartItemsIds', getCartItems)

module.exports = router;
