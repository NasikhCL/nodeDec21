const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct
} = require("../controllers/productController");
const { validateJWT } = require('../middleware/jwt');


router.post('/create', validateJWT, createProduct);
router.get('/getProducts',validateJWT, getProducts);
router.get("/getProductById/:id", valtidateJWt, getProductById);
router.delete("/deleteProduct/:id", valtidateJWt, deleteProduct);
router.put("/updateProduct/:id", valtidateJWt, updateProduct);
module.exports = router