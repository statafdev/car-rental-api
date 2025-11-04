const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, "Please provide the brand"],
  },
  model: {
    type: String,
    required: [true, "Please provide the model"],
  },
  year: {
    type: Number,
    required: [true, "Please provide the year"],
  },
  price: {
    type: Number,
    required: [true, "Please provide the price"],
  },
  category: {
    type: String,
    enum: ["Economy", "Comfort", "Luxury", "SUV", "Sport"],
    required: [true, "Please provide the categoty"],
  },
  seats: {
    type: String,
    required: [true, "Please provide the number of seats"],
  },
  transmission: {
    type: String,
    enum: ["Automatic", "Manual"],
    required: [true, "Please provide the type of transmission"],
  },
  fuel: {
    type: String,
    enum: ["Petrol", "Diesel", "Hybrid", "Electric"],
    default: "Petrol",
  },
  color: {
    type: String,
    required: [true, "Please provide the color"],
  },
  image: {
    type: String,
    features: [String],
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Car", carSchema);
