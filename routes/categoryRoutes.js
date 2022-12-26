const express = require('express');
const router = express.Router();
const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");
const {validateJWT} =require('../middleware/jwt')


router.post('/createCategory', validateJWT, createCategory);
router.get('/getCategories', validateJWT, getCategories);
router.put('/updateCategory/:id', validateJWT, updateCategory);
router.delete('/deleteCategory/:id', validateJWT, deleteCategory);

module.exports = router;