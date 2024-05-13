const factory = require('../factory/factory');
const Review = require('../models/review.model');

//Nested route
// GET /api/v1/products/:productId/reviews
const createFilterObj = (req, res, next) => {
  let filterObject = {};
  if (req.params.productId) filterObject = { product: req.params.productId };
  req.filterObj = filterObject;
  next();
};
/*-----------------------------------------------------------------*/
// @desc    Get list of reviews
// @route   GET /api/v1/reviews
// @access  Public
const getReviews = factory.getAll(Review);
/*-----------------------------------------------------------------*/
// @desc    Get specific review by id
// @route   GET /api/v1/reviews/:id
// @access  Public
const getReview = factory.getOne(Review);
/*-----------------------------------------------------------------*/
// @desc    Create review
// @route   POST  /api/v1/reviews
// @access  Private/Protect/User

// Nested route (Create)
const setProductIdAndUserIdToBody = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user._id;
  next();
};

const createReview = factory.createOne(Review);
/*-----------------------------------------------------------------*/
// @desc    Update specific review
// @route   PUT /api/v1/review/:id
// @access  Private/Protect/User
const updateReview = factory.updateOne(Review);
/*-----------------------------------------------------------------*/
// @desc    Delete specific review
// @route   DELETE /api/v1/reviews/:id
// @access  Private/Protect/User-Admin
const deleteReview = factory.deleteOne(Review);
/*-----------------------------------------------------------------*/
module.exports = {
  getReview,
  getReviews,
  createReview,
  updateReview,
  deleteReview,
  createFilterObj,
  setProductIdAndUserIdToBody
};