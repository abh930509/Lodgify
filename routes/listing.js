const express = require("express");
const router = express.Router();

const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const flash = require("connect-flash");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createPost)
  );

//all listings

router.get("/new", isLoggedIn, listingController.createListings);
router
  .route("/:id")
  .get(listingController.showListings)
  .put(
    isOwner,
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    listingController.editPost
  )
  .delete(isOwner, isLoggedIn, listingController.deleteRoute);

// create listings

//edit route

router.get("/:id/edit", isLoggedIn, listingController.editForm);

module.exports = router;
