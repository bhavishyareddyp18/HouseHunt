const express = require("express");

const router = express.Router();

const controller =
require("../controllers/agreementController");

router.post(
  "/generate",
  controller.generateAgreement
);

router.get(
  "/",
  controller.getAgreements
);

module.exports = router;