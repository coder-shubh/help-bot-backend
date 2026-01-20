const botResponses = require("../data/botResponses");

/**
 * Extract intent from user message using keyword matching
 */
const extractIntent = (message) => {
  const msg = message.toLowerCase().trim();

  // Greetings
  if (
    msg.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening)/) ||
    msg.includes("help me") ||
    msg === "help"
  ) {
    return "GREETING";
  }

  // Goodbye
  if (
    msg.match(/(bye|goodbye|see you|thanks|thank you|that's all|done|finished)/) &&
    !msg.includes("thank you for")
  ) {
    return "GOODBYE";
  }

  // Data Usage
  if (
    msg.includes("data usage") ||
    msg.includes("data used") ||
    msg.includes("how much data") ||
    msg.includes("data remaining") ||
    msg.includes("data left") ||
    msg.includes("check data") ||
    msg.includes("view data") ||
    msg.includes("data consumption") ||
    msg.includes("data meter")
  ) {
    return "DATA_USAGE";
  }

  if (
    msg.includes("low data") ||
    msg.includes("running out of data") ||
    msg.includes("no data") ||
    msg.includes("out of data") ||
    msg.includes("data finished") ||
    msg.includes("need more data")
  ) {
    return "DATA_LOW";
  }

  // Billing
  if (
    msg.includes("bill") ||
    msg.includes("invoice") ||
    msg.includes("statement") ||
    msg.includes("charges") ||
    msg.includes("billing")
  ) {
    return "BILLING";
  }

  if (
    msg.includes("payment") ||
    msg.includes("pay") ||
    msg.includes("due date") ||
    msg.includes("payment method") ||
    msg.includes("how to pay") ||
    msg.includes("payment due")
  ) {
    return "PAYMENT";
  }

  // Plans
  if (
    msg.includes("plan") ||
    msg.includes("package") ||
    msg.includes("subscription") ||
    msg.includes("service plan")
  ) {
    if (
      msg.includes("upgrade") ||
      msg.includes("change plan") ||
      msg.includes("better plan") ||
      msg.includes("more data plan")
    ) {
      return "PLAN_UPGRADE";
    }
    return "PLANS";
  }

  // SIM Management
  if (
    msg.includes("esim") ||
    msg.includes("e-sim") ||
    msg.includes("electronic sim") ||
    msg.includes("digital sim")
  ) {
    return "ESIM";
  }

  if (
    msg.includes("physical sim") ||
    msg.includes("physical card") ||
    msg.includes("sim card") ||
    (msg.includes("sim") && msg.includes("physical"))
  ) {
    return "PHYSICAL_SIM";
  }

  if (
    msg.includes("swap sim") ||
    msg.includes("change sim") ||
    msg.includes("replace sim") ||
    msg.includes("new sim card") ||
    (msg.includes("sim") && (msg.includes("swap") || msg.includes("replace")))
  ) {
    return "SIM_SWAP";
  }

  // Service Management
  if (
    msg.includes("switch service") ||
    msg.includes("change service") ||
    msg.includes("multiple services") ||
    msg.includes("other service") ||
    (msg.includes("service") && msg.includes("switch"))
  ) {
    return "SWITCH_SERVICE";
  }

  // PIN Management
  if (
    msg.includes("change pin") ||
    msg.includes("update pin") ||
    msg.includes("modify pin") ||
    (msg.includes("pin") && msg.includes("change"))
  ) {
    return "CHANGE_PIN";
  }

  if (
    msg.includes("reset pin") ||
    msg.includes("forgot pin") ||
    msg.includes("lost pin") ||
    msg.includes("recover pin") ||
    (msg.includes("pin") && (msg.includes("forgot") || msg.includes("reset")))
  ) {
    return "RESET_PIN";
  }

  // Usage History
  if (
    msg.includes("usage history") ||
    msg.includes("past usage") ||
    msg.includes("previous usage") ||
    msg.includes("historical usage") ||
    (msg.includes("usage") && msg.includes("history"))
  ) {
    return "USAGE_HISTORY";
  }

  if (
    msg.includes("usage breakdown") ||
    msg.includes("detailed usage") ||
    msg.includes("usage details") ||
    (msg.includes("usage") && (msg.includes("breakdown") || msg.includes("detail")))
  ) {
    return "USAGE_BREAKDOWN";
  }

  // Store/Shop
  if (
    msg.includes("store") ||
    msg.includes("shop") ||
    msg.includes("buy") ||
    msg.includes("purchase") ||
    msg.includes("new plan") ||
    msg.includes("browse plans")
  ) {
    if (msg.includes("cart") || msg.includes("basket")) {
      return "CART";
    }
    return "STORE";
  }

  if (
    msg.includes("cart") ||
    msg.includes("basket") ||
    msg.includes("checkout") ||
    msg.includes("order")
  ) {
    return "CART";
  }

  // Add to Cart Intent - detect when user wants to add a plan to cart
  if (
    (msg.includes("add to cart") || msg.includes("add cart") || msg.includes("add plan")) &&
    (msg.includes("cheapest") || msg.includes("cheap") || msg.includes("lowest") ||
     msg.includes("4g") || msg.includes("4 g") || msg.includes("four g") ||
     msg.includes("voice") || msg.includes("data") || msg.includes("backup") ||
     msg.includes("plan"))
  ) {
    return "ADD_TO_CART";
  }

  // View Cart Contents
  if (
    msg.includes("view cart") ||
    msg.includes("show cart") ||
    msg.includes("my cart") ||
    msg.includes("cart items") ||
    msg.includes("what's in my cart") ||
    (msg.includes("cart") && (msg.includes("view") || msg.includes("show") || msg.includes("see")))
  ) {
    return "VIEW_CART";
  }

  // Browse Plans by Category
  if (
    msg.includes("browse") ||
    msg.includes("show plans") ||
    msg.includes("view plans") ||
    msg.includes("list plans") ||
    msg.includes("available plans") ||
    (msg.includes("plans") && (msg.includes("voice") || msg.includes("data") || msg.includes("4g") || msg.includes("backup")))
  ) {
    return "BROWSE_PLANS";
  }

  // Plan Details
  if (
    msg.includes("plan details") ||
    msg.includes("plan info") ||
    msg.includes("tell me about") ||
    msg.includes("what is") ||
    (msg.includes("plan") && (msg.includes("detail") || msg.includes("info") || msg.includes("feature")))
  ) {
    return "PLAN_DETAILS";
  }

  // Compare Plans
  if (
    msg.includes("compare") ||
    msg.includes("difference between") ||
    msg.includes("which is better") ||
    (msg.includes("plan") && msg.includes("compare"))
  ) {
    return "COMPARE_PLANS";
  }

  // Order History
  if (
    msg.includes("order history") ||
    msg.includes("past orders") ||
    msg.includes("previous orders") ||
    msg.includes("my orders") ||
    (msg.includes("order") && msg.includes("history"))
  ) {
    return "ORDER_HISTORY";
  }

  // Clear Cart
  if (
    msg.includes("clear cart") ||
    msg.includes("empty cart") ||
    msg.includes("remove all") ||
    msg.includes("delete cart") ||
    (msg.includes("cart") && (msg.includes("clear") || msg.includes("empty") || msg.includes("delete all")))
  ) {
    return "CLEAR_CART";
  }

  // Cart Total
  if (
    msg.includes("cart total") ||
    msg.includes("total price") ||
    msg.includes("how much") ||
    (msg.includes("cart") && msg.includes("total")) ||
    (msg.includes("cart") && msg.includes("cost"))
  ) {
    return "CART_TOTAL";
  }

  // Plan Recommendation
  if (
    msg.includes("recommend") ||
    msg.includes("suggest") ||
    msg.includes("which plan") ||
    msg.includes("best plan") ||
    (msg.includes("plan") && (msg.includes("recommend") || msg.includes("suggest") || msg.includes("best")))
  ) {
    return "PLAN_RECOMMENDATION";
  }

  // Notifications
  if (
    msg.includes("notification") ||
    msg.includes("alert") ||
    msg.includes("message") ||
    msg.includes("update") ||
    msg.includes("reminder")
  ) {
    return "NOTIFICATIONS";
  }

  // Terms & Privacy
  if (
    msg.includes("terms") ||
    msg.includes("conditions") ||
    msg.includes("t&c") ||
    msg.includes("terms and conditions")
  ) {
    return "TERMS_CONDITIONS";
  }

  if (
    msg.includes("privacy") ||
    msg.includes("privacy policy") ||
    msg.includes("data protection") ||
    msg.includes("personal data")
  ) {
    return "PRIVACY_POLICY";
  }

  // Profile
  if (
    msg.includes("profile") ||
    msg.includes("account") ||
    msg.includes("my information") ||
    msg.includes("user details")
  ) {
    return "PROFILE";
  }

  // Help
  if (
    msg.includes("help") ||
    msg.includes("support") ||
    msg.includes("assistance") ||
    msg.includes("how to") ||
    msg.includes("what can") ||
    msg.includes("how do")
  ) {
    return "HELP";
  }

  return "FALLBACK";
};

/**
 * Get bot reply based on user message
 */
exports.getBotReply = (message, context = {}) => {
  if (!message || typeof message !== "string") {
    return botResponses.FALLBACK;
  }

  const intent = extractIntent(message);
  const response = botResponses[intent] || botResponses.FALLBACK;

  // Add contextual information if available
  let reply = response.reply;

  // You can enhance responses with context data here
  // For example, if context has user's data usage, billing info, etc.
  if (context.dataUsage) {
    // Could personalize data usage responses
  }

  if (context.selectedService) {
    // Could personalize service-specific responses
  }

  return {
    intent: response.intent,
    reply: reply,
    timestamp: new Date().toISOString(),
  };
};

/**
 * Get available intents (for debugging/testing)
 */
exports.getAvailableIntents = () => {
  return Object.keys(botResponses).map((key) => ({
    key,
    intent: botResponses[key].intent,
  }));
};
