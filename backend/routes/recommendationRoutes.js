const express = require("express");

const router = express.Router();

const controller =
require("../controllers/recommendationController");

router.get(
  "/",
  controller.getRecommendations
);

router.get(
  "/similar/:id",
  controller.getSimilar
);

module.exports = router;