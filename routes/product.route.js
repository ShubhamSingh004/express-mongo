const express = require("express");
const router = express.Router();

const productController = require('../controllers/product.controller');


// add product
router.post('/', productController.createProducts);

// view all products
router.get("/view-all", productController.getAllProducts);

// find product by ID
router.get("/:id", productController.getProduct);

// Update Product
router.put("/:id", productController.updateProduct);

// delete the product by ID
router.delete("/:id", productController.deleteProduct);


module.exports = router;