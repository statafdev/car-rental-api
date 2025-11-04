const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your first name"],
    trim: true,
  },

  lname: {
    type: String,
    required: [true, "Please provide your last name"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    trim: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: 6,
  },

  phone: {
    type: String,
    required: [true, "Please provide a phone number"],
    trim: true,
  },

  age: {
    type: Number,
    required: [true, "Please provide your age"],
    min: [18, "Must be at least 18 years old"],
  },

  gender: {
    type: String,
    required: [true, "Please specify your gender"],
    enum: ["male", "female", "other"],
  },

  address: {
    wilaya: {
      type: String,
      required: [true, "Please provide your state"],
    },
    province: {
      type: String,
      required: [true, "Please provide your province"],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Client", clientSchema);
