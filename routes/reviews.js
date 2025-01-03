const express = require("express");
const router = express.Router({ mergeParams: true });

const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isAuthor, validateReviews } = require("../middleware.js");

const reviewsController = require("../controllers/reviews.js");

//reviews routers

router.post(
  "/",
  isLoggedIn,
  validateReviews,
  wrapAsync(reviewsController.createReviews)
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewsController.deleteReviews)
);

module.exports = router;
