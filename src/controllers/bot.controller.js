const { getBotReply } = require("../services/bot.service");

/**
 * Handle bot message request
 * POST /api/bot/message
 * Body: { message: string, context?: object }
 */
exports.handleBotMessage = (req, res) => {
  try {
    const { message, context } = req.body;

    if (!message || typeof message !== "string" || message.trim() === "") {
      return res.status(400).json({
        error: "Message is required and must be a non-empty string",
        success: false,
      });
    }

    // Get bot reply with optional context
    const response = getBotReply(message, context || {});

    return res.status(200).json({
      success: true,
      ...response,
    });
  } catch (error) {
    console.error("Error handling bot message:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
      message: "An error occurred while processing your message",
    });
  }
};

/**
 * Get available intents (for testing/debugging)
 * GET /api/bot/intents
 */
exports.getIntents = (req, res) => {
  try {
    const { getAvailableIntents } = require("../services/bot.service");
    const intents = getAvailableIntents();

    return res.status(200).json({
      success: true,
      intents: intents,
      count: intents.length,
    });
  } catch (error) {
    console.error("Error getting intents:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};

/**
 * Health check endpoint
 * GET /api/bot/health
 */
exports.healthCheck = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Bot service is running",
    timestamp: new Date().toISOString(),
  });
};
