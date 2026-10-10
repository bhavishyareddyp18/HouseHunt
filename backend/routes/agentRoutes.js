const express = require("express");

const router = express.Router();

const controller =
require("../controllers/agentController");

router.get("/", controller.getAgents);

router.get("/:id", controller.getAgentById);

router.get("/dashboard", controller.getDashboard);

module.exports = router;