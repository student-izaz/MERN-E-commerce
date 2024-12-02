const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middlewares/adminMiddleware');
const authenticate = require('../middlewares/authMiddleware');
const adminController = require('../controllers/adminController');

router.get('/', authenticate, adminMiddleware, adminController.admin );

module.exports = router;