const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../controllers/productController');
const { validateJWT } = require('../middleware/jwt');


router.post('/create', validateJWT, createProduct);
router.get('/getProducts',validateJWT, getProducts)
module.exports = router