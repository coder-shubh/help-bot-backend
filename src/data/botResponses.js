module.exports = {
  // Greetings
  GREETING: {
    intent: "GREETING",
    reply: "Hello! 👋 I'm your Vocus support assistant. How can I help you today? You can ask me about:\n\n" +
      "• Data usage and plans\n" +
      "• Billing and payments\n" +
      "• SIM management (eSIM/Physical SIM)\n" +
      "• Service switching\n" +
      "• PIN management\n" +
      "• Usage history\n" +
      "• Store and plans\n" +
      "• Notifications\n\n" +
      "What would you like to know?"
  },

  // Data Usage
  DATA_USAGE: {
    intent: "DATA_USAGE",
    reply: "📊 **Data Usage Information**\n\n" +
      "You can check your data usage in the Dashboard:\n" +
      "1. Go to the Home screen\n" +
      "2. View the circular progress bar showing your data consumption\n" +
      "3. Tap the info icon (ℹ️) for detailed usage breakdown\n\n" +
      "For more detailed analysis:\n" +
      "• Tap the 'Usage' tab at the bottom\n" +
      "• View usage history and breakdowns\n" +
      "• Check data, voice, and messaging usage separately\n\n" +
      "Need help understanding your usage? Just ask!"
  },

  DATA_LOW: {
    intent: "DATA_LOW",
    reply: "⚠️ **Low Data Warning**\n\n" +
      "If you're running low on data:\n\n" +
      "**Options:**\n" +
      "1. **Upgrade Plan**: Go to Store → Browse plans → Select a plan with more data\n" +
      "2. **Add Data Addon**: Purchase additional data packs from the Store\n" +
      "3. **Monitor Usage**: Check Usage tab to see which apps/services use the most data\n" +
      "4. **Data Sharing**: If you have multiple services, check if data sharing is enabled\n\n" +
      "Would you like help finding a plan that fits your needs?"
  },

  // Billing
  BILLING: {
    intent: "BILLING",
    reply: "💳 **Billing Information**\n\n" +
      "To view your bills:\n" +
      "1. Tap the 'Billing' tab at the bottom\n" +
      "2. View your current and past bills\n" +
      "3. Tap any bill to see detailed breakdown\n\n" +
      "**Bill Details Include:**\n" +
      "• Service charges\n" +
      "• Data usage charges\n" +
      "• Addon charges\n" +
      "• Payment due date\n" +
      "• Payment history\n\n" +
      "Need help with a specific bill? Let me know!"
  },

  PAYMENT: {
    intent: "PAYMENT",
    reply: "💵 **Payment Information**\n\n" +
      "**Payment Methods:**\n" +
      "• Credit/Debit cards\n" +
      "• Direct debit\n" +
      "• Bank transfer\n\n" +
      "**To Update Payment:**\n" +
      "1. Go to More → Settings\n" +
      "2. Select Payment Methods\n" +
      "3. Add or update your payment details\n\n" +
      "**Payment Due:**\n" +
      "Check your billing tab for due dates. Bills are typically due monthly based on your billing cycle.\n\n" +
      "Need help setting up automatic payments?"
  },

  // Plans
  PLANS: {
    intent: "PLANS",
    reply: "📱 **Service Plans**\n\n" +
      "We offer three types of plans:\n\n" +
      "**1. Voice + Data Plans** 📞\n" +
      "• Unlimited calls & texts\n" +
      "• Data included (30GB - 100GB+)\n" +
      "• 5G network access\n\n" +
      "**2. Data Only Plans** 📶\n" +
      "• Data connection only\n" +
      "• Perfect for tablets/portable WiFi\n" +
      "• 25GB - 100GB options\n\n" +
      "**3. 4G Backup Plans** 🔄\n" +
      "• Backup internet connection\n" +
      "• Lower data limits\n" +
      "• Affordable pricing\n\n" +
      "**To Browse Plans:**\n" +
      "Go to Store tab → Select 'New Number' → Choose your plan type\n\n" +
      "Which type of plan interests you?"
  },

  PLAN_UPGRADE: {
    intent: "PLAN_UPGRADE",
    reply: "⬆️ **Upgrade Your Plan**\n\n" +
      "To upgrade your current plan:\n\n" +
      "**Steps:**\n" +
      "1. Go to Store tab\n" +
      "2. Browse available plans\n" +
      "3. Select a plan with more data/features\n" +
      "4. Add to cart and complete purchase\n\n" +
      "**Benefits of Upgrading:**\n" +
      "• More data allowance\n" +
      "• Better network speeds (5G)\n" +
      "• Additional features\n" +
      "• Better value for money\n\n" +
      "Your new plan will be activated after purchase. Changes typically take effect in your next billing cycle.\n\n" +
      "Want to compare plans?"
  },

  // SIM Management
  ESIM: {
    intent: "ESIM",
    reply: "📲 **eSIM Information**\n\n" +
      "eSIM (Electronic SIM) is a digital SIM that doesn't require a physical card.\n\n" +
      "**Benefits:**\n" +
      "• No physical card needed\n" +
      "• Easy to switch between devices\n" +
      "• Can have multiple eSIMs on one device\n" +
      "• Instant activation\n\n" +
      "**To Activate eSIM:**\n" +
      "1. Go to More → Activate eSIM\n" +
      "2. Follow the on-screen instructions\n" +
      "3. Scan QR code or enter details manually\n\n" +
      "**To Switch to eSIM:**\n" +
      "Go to More → SIM Options → Switch to eSIM\n\n" +
      "Need help with eSIM setup?"
  },

  PHYSICAL_SIM: {
    intent: "PHYSICAL_SIM",
    reply: "📱 **Physical SIM Information**\n\n" +
      "Physical SIM cards are traditional SIM cards that you insert into your device.\n\n" +
      "**To Activate Physical SIM:**\n" +
      "1. Go to More → Activate Physical SIM\n" +
      "2. Enter your SIM number\n" +
      "3. Follow activation steps\n\n" +
      "**SIM Number Location:**\n" +
      "• On the SIM card itself\n" +
      "• In the packaging\n" +
      "• Can be scanned using the app\n\n" +
      "**To Swap SIM:**\n" +
      "Go to More → SIM Options → Swap SIM\n\n" +
      "Need help finding your SIM number?"
  },

  SIM_SWAP: {
    intent: "SIM_SWAP",
    reply: "🔄 **SIM Swap**\n\n" +
      "To swap your SIM card:\n\n" +
      "**Steps:**\n" +
      "1. Go to More → SIM Options\n" +
      "2. Select 'Swap SIM'\n" +
      "3. Choose scheduled date\n" +
      "4. Enter reason (lost, damaged, etc.)\n" +
      "5. Enter new SIM number\n" +
      "6. Submit request\n\n" +
      "**Common Reasons:**\n" +
      "• Lost SIM card\n" +
      "• Damaged SIM card\n" +
      "• Switching devices\n" +
      "• Upgrading to eSIM\n\n" +
      "Your swap will be processed on the scheduled date. You'll receive a confirmation notification."
  },

  // Service Management
  SWITCH_SERVICE: {
    intent: "SWITCH_SERVICE",
    reply: "🔄 **Switch Services**\n\n" +
      "If you have multiple services, you can switch between them:\n\n" +
      "**From Dashboard:**\n" +
      "1. Tap the switch icon (↔️) in the top left\n" +
      "2. Select the service you want to view\n" +
      "3. Dashboard will update with that service's data\n\n" +
      "**From Service List:**\n" +
      "• Scroll down on Dashboard\n" +
      "• Tap any unselected service card\n" +
      "• Service will switch automatically\n\n" +
      "**What You Can View:**\n" +
      "• Data usage for that service\n" +
      "• Billing information\n" +
      "• Usage history\n" +
      "• Service details\n\n" +
      "All your services are listed on the Dashboard!"
  },

  // PIN Management
  CHANGE_PIN: {
    intent: "CHANGE_PIN",
    reply: "🔐 **Change PIN**\n\n" +
      "To change your app PIN:\n\n" +
      "**Steps:**\n" +
      "1. Go to More → Change PIN\n" +
      "2. Enter your current PIN\n" +
      "3. Enter your new PIN (4-6 digits)\n" +
      "4. Confirm your new PIN\n" +
      "5. Save changes\n\n" +
      "**PIN Requirements:**\n" +
      "• 4-6 digits\n" +
      "• Cannot be all the same number\n" +
      "• Cannot be sequential (1234)\n\n" +
      "**Security Tips:**\n" +
      "• Don't share your PIN\n" +
      "• Use a unique PIN\n" +
      "• Change it regularly\n\n" +
      "Forgot your PIN? You can reset it from the login screen."
  },

  RESET_PIN: {
    intent: "RESET_PIN",
    reply: "🔓 **Reset PIN**\n\n" +
      "If you've forgotten your PIN:\n\n" +
      "**Steps:**\n" +
      "1. Go to Login screen\n" +
      "2. Tap 'Forgot PIN'\n" +
      "3. Verify your identity (OTP will be sent)\n" +
      "4. Enter OTP\n" +
      "5. Set a new PIN\n\n" +
      "**Alternative:**\n" +
      "Contact support if you're unable to reset via the app.\n\n" +
      "Need help with the reset process?"
  },

  // Usage
  USAGE_HISTORY: {
    intent: "USAGE_HISTORY",
    reply: "📈 **Usage History**\n\n" +
      "To view your usage history:\n\n" +
      "**Steps:**\n" +
      "1. Go to Usage tab\n" +
      "2. View current usage summary\n" +
      "3. Tap 'Usage History' for past periods\n" +
      "4. View detailed breakdowns\n\n" +
      "**What You Can See:**\n" +
      "• Data usage by period\n" +
      "• Voice call minutes\n" +
      "• SMS/MMS count\n" +
      "• Usage by service type\n" +
      "• Daily/weekly/monthly views\n\n" +
      "**Usage Breakdown:**\n" +
      "Tap any period to see detailed breakdown by:\n" +
      "• Date\n" +
      "• Service type\n" +
      "• Time of day\n\n" +
      "Want to understand your usage patterns better?"
  },

  USAGE_BREAKDOWN: {
    intent: "USAGE_BREAKDOWN",
    reply: "📊 **Usage Breakdown**\n\n" +
      "Detailed usage breakdown shows:\n\n" +
      "**Data Usage:**\n" +
      "• Total data used\n" +
      "• Data remaining\n" +
      "• Usage by app/service\n" +
      "• Peak usage times\n\n" +
      "**Voice Usage:**\n" +
      "• Call minutes used\n" +
      "• Call history\n" +
      "• International calls\n\n" +
      "**Messaging:**\n" +
      "• SMS sent/received\n" +
      "• MMS count\n\n" +
      "**To View Breakdown:**\n" +
      "Usage tab → Select period → View breakdown\n\n" +
      "This helps you understand where your usage goes!"
  },

  // Store/Shop
  STORE: {
    intent: "STORE",
    reply: "🛒 **Store**\n\n" +
      "Browse and purchase plans from the Store:\n\n" +
      "**Available Options:**\n" +
      "• New Number plans\n" +
      "• Port In (keep your number)\n" +
      "• Spare SIM\n\n" +
      "**Plan Types:**\n" +
      "1. Voice + Data\n" +
      "2. Data Only\n" +
      "3. 4G Backup\n\n" +
      "**To Purchase:**\n" +
      "1. Go to Store tab\n" +
      "2. Select your option\n" +
      "3. Choose SIM type (eSIM/Physical)\n" +
      "4. Select plan type\n" +
      "5. Choose specific plan\n" +
      "6. Add addons (optional)\n" +
      "7. Select quantity\n" +
      "8. Add to cart\n" +
      "9. Complete purchase\n\n" +
      "**Features:**\n" +
      "• Compare plans side-by-side\n" +
      "• View plan details\n" +
      "• Add multiple plans to cart\n" +
      "• Order history tracking\n\n" +
      "Ready to shop? Go to the Store tab!"
  },

  CART: {
    intent: "CART",
    reply: "🛒 **Shopping Cart**\n\n" +
      "To view your cart:\n\n" +
      "**Steps:**\n" +
      "1. Go to Store tab\n" +
      "2. Tap cart icon in header\n" +
      "3. Review items in cart\n" +
      "4. Modify quantities if needed\n" +
      "5. Proceed to checkout\n\n" +
      "**Cart Features:**\n" +
      "• View all selected plans\n" +
      "• Adjust quantities\n" +
      "• Remove items\n" +
      "• See total price\n" +
      "• Add more items\n\n" +
      "**Checkout:**\n" +
      "• Review order summary\n" +
      "• Enter payment details\n" +
      "• Confirm purchase\n" +
      "• Receive order confirmation\n\n" +
      "Items stay in cart until you complete purchase or remove them."
  },

  // Notifications
  NOTIFICATIONS: {
    intent: "NOTIFICATIONS",
    reply: "🔔 **Notifications**\n\n" +
      "To view notifications:\n\n" +
      "**Steps:**\n" +
      "1. Tap Notifications tab\n" +
      "2. View all notifications\n" +
      "3. Tap to read details\n\n" +
      "**Notification Types:**\n" +
      "• Service alerts\n" +
      "• Billing reminders\n" +
      "• Usage warnings\n" +
      "• Plan updates\n" +
      "• Order confirmations\n" +
      "• System updates\n\n" +
      "**Notification Settings:**\n" +
      "Go to More → Notification Settings to:\n" +
      "• Enable/disable notifications\n" +
      "• Set notification preferences\n" +
      "• Configure alert types\n\n" +
      "Stay informed about your services!"
  },

  // Terms & Privacy
  TERMS_CONDITIONS: {
    intent: "TERMS_CONDITIONS",
    reply: "📄 **Terms & Conditions**\n\n" +
      "To view Terms & Conditions:\n\n" +
      "**Steps:**\n" +
      "1. Go to More → Settings\n" +
      "2. Select Terms & Conditions\n" +
      "3. Read the full document\n\n" +
      "**Also Available:**\n" +
      "• During account setup\n" +
      "• In app settings\n" +
      "• Via support\n\n" +
      "Terms cover service usage, billing, and user responsibilities."
  },

  PRIVACY_POLICY: {
    intent: "PRIVACY_POLICY",
    reply: "🔒 **Privacy Policy**\n\n" +
      "To view Privacy Policy:\n\n" +
      "**Steps:**\n" +
      "1. Go to More → Settings\n" +
      "2. Select Privacy Policy\n" +
      "3. Read privacy information\n\n" +
      "**Privacy Policy Covers:**\n" +
      "• Data collection\n" +
      "• Data usage\n" +
      "• Data protection\n" +
      "• Your rights\n" +
      "• Cookie policy\n\n" +
      "We're committed to protecting your privacy!"
  },

  // Account/Profile
  PROFILE: {
    intent: "PROFILE",
    reply: "👤 **Profile Information**\n\n" +
      "Your profile information is displayed on the Dashboard:\n\n" +
      "**Visible Information:**\n" +
      "• Service name\n" +
      "• Phone number (masked)\n" +
      "• Service type (Personal/Corporate)\n" +
      "• Current plan name\n" +
      "• Device model\n\n" +
      "**To Update Profile:**\n" +
      "Contact support for profile changes.\n\n" +
      "**Service Details:**\n" +
      "• View on Dashboard\n" +
      "• Switch between services\n" +
      "• View service-specific data\n\n" +
      "Need to update something?"
  },

  // Help/Support
  HELP: {
    intent: "HELP",
    reply: "❓ **Help & Support**\n\n" +
      "I'm here to help! You can ask me about:\n\n" +
      "**Common Topics:**\n" +
      "• Data usage and plans\n" +
      "• Billing questions\n" +
      "• SIM activation\n" +
      "• Service management\n" +
      "• PIN changes\n" +
      "• Usage history\n" +
      "• Store and purchases\n\n" +
      "**Other Support Options:**\n" +
      "• Check FAQ section in app\n" +
      "• Contact customer support\n" +
      "• Visit help center\n\n" +
      "What specific help do you need?"
  },

  // Fallback
  FALLBACK: {
    intent: "UNKNOWN",
    reply: "🤔 I'm not sure I understood that. Let me help you better!\n\n" +
      "You can ask me about:\n\n" +
      "• **Data & Usage**: 'How much data have I used?', 'Check my usage'\n" +
      "• **Billing**: 'Show my bills', 'Payment due date'\n" +
      "• **Plans**: 'What plans are available?', 'Upgrade plan'\n" +
      "• **SIM**: 'Activate eSIM', 'Swap SIM', 'Physical SIM'\n" +
      "• **Services**: 'Switch service', 'Multiple services'\n" +
      "• **PIN**: 'Change PIN', 'Reset PIN'\n" +
      "• **Store**: 'Browse plans', 'Shopping cart'\n" +
      "• **Notifications**: 'View notifications', 'Notification settings'\n\n" +
      "Try asking in a different way, or pick a topic above!"
  },

  // Goodbye
  GOODBYE: {
    intent: "GOODBYE",
    reply: "👋 Goodbye! Thanks for using Vocus. If you need help later, just tap the robot icon again. Have a great day! 😊"
  }
};
