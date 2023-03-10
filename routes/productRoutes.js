const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  updateQuantity,
  productSold
} = require("../controllers/productController");
const { validateJWT } = require('../middleware/jwt');


router.post('/create', validateJWT, createProduct);
router.get('/getProducts',validateJWT, getProducts);
router.get("/getProductById/:id", validateJWT, getProductById);
router.delete("/deleteProduct/:id", validateJWT, deleteProduct);
router.put("/updateProduct/:id", validateJWT, updateProduct);
router.put("/updateQuantity/:id", validateJWT, updateQuantity);
router.put('/productSold/:id', validateJWT, productSold)
module.exports = router