const express = require("express");
const router = express.Router();
const {
  handleBotMessage,
  getIntents,
  healthCheck,
} = require("../controllers/bot.controller");

// Health check endpoint
router.get("/health", healthCheck);

// Get available intents (for testing)
router.get("/intents", getIntents);

// Main bot message endpoint
router.post("/message", handleBotMessage);

module.exports = router;
