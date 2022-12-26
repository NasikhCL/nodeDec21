const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/productController');
const { validateJWT } = require('../middleware/jwt');


router.post('/create', validateJWT, createProduct);

module.exports = router