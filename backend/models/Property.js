const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      default: ""
    },
    description: {
      type: String,
      trim: true,
      default: ""
    },
    city: {
      type: String,
      trim: true,
      index: true
    },
    location: {
      type: String,
      trim: true,
      default: ""
    },
    type: {
      type: String,
      trim: true,
      index: true
    },
    rent: {
      type: Number,
      default: 0,
      index: true
    },
    bedrooms: {
      type: Number,
      default: 0
    },
    bathrooms: {
      type: Number,
      default: 0
    },
    images: {
      type: [String],
      default: []
    },
    lat: {
      type: Number
    },
    lng: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Property", PropertySchema);
