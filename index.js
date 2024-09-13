const mongoose = require("mongoose");
const express = require("express");


const app = express();



// Connect to MongoDB
mongoose.connect(`mongodb://localhost/the_ultimate_dog_training_facility`);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Start the server
app.listen(8080, () => {
  console.log("Server has started",8080);
});
