const factory = require("../factory/factory");
const Product = require("../models/product.model");
/*-----------------------------------------------------------------*/
// @desc    Get list of products
// @route   GET /api/v1/products
// @access  Public
const getProducts = factory.getAll(Product, "Products");
/*-----------------------------------------------------------------*/
// @desc    Get specific product by id
// @route   GET /api/v1/products/:id
// @access  Public
const getProduct = factory.getOne(Product, 'reviews');
/*-----------------------------------------------------------------*/
// @desc    Create product
// @route   POST  /api/v1/products
// @access  Private
const createProduct = factory.createOne(Product);
/*-----------------------------------------------------------------*/
// @desc    Update specific product
// @route   PUT /api/v1/products/:id
// @access  Private
const updateProduct = factory.updateOne(Product);
/*-----------------------------------------------------------------*/
// @desc    Delete specific product
// @route   DELETE /api/v1/product/:id
// @access  Private
const deleteProduct = factory.deleteOne(Product);
/*-----------------------------------------------------------------*/
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
/*-----------------------------------------------------------------*/
