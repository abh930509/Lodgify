const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;

const ListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
  },
  location: String,
  contry: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

ListingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});
const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
