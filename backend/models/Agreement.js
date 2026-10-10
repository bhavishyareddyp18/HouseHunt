const mongoose = require("mongoose");

const agreementSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property"
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  pdfUrl: {
    type: String
  },

  status: {
    type: String,
    default: "Generated"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Agreement", agreementSchema);