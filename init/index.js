const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("connection successful.");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://abhishekgiri250700:yERDWMzzAEXT0j7j@cluster0.7ct2m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

const initDB = async () => {
  await Listing.deleteMany({});
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "677076582494ceb0ef76e800",
  }));
  await Listing.insertMany(initdata.data);
  console.log("data was initialized.");
};

initDB();
