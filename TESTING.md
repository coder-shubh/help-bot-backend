# ChatBot Backend Testing Guide

## Prerequisites

1. Make sure the backend is running:
```bash
cd help-bot-backend
npm install
npm run dev
```

You should see: `Server running on port 3000`

## Testing Methods

### Method 1: Using curl (Terminal/Command Line)

#### Test 1: Health Check
```bash
curl http://localhost:3000/api/bot/health
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Bot service is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

#### Test 2: Get Available Intents
```bash
curl http://localhost:3000/api/bot/intents
```

**Expected Response:**
```json
{
  "success": true,
  "intents": [
    {"key": "GREETING", "intent": "GREETING"},
    {"key": "DATA_USAGE", "intent": "DATA_USAGE"},
    ...
  ],
  "count": 25
}
```

#### Test 3: Send a Greeting Message
```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

**Expected Response:**
```json
{
  "success": true,
  "intent": "GREETING",
  "reply": "Hello! 👋 I'm your Vocus support assistant...",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

#### Test 4: Ask About Data Usage
```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I check my data usage?"}'
```

#### Test 5: Ask About Billing
```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Show me my bills"}'
```

#### Test 6: Ask About Plans
```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "What plans are available?"}'
```

#### Test 7: Ask About eSIM
```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I activate eSIM?"}'
```

#### Test 8: Ask About PIN
```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "I want to change my PIN"}'
```

#### Test 9: Ask About Store
```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "I want to buy a new plan"}'
```

#### Test 10: Unknown Query (Fallback)
```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "What is the weather today?"}'
```

---

### Method 2: Using Postman

1. **Create a new POST request**
   - URL: `http://localhost:3000/api/bot/message`
   - Method: `POST`
   - Headers: 
     - Key: `Content-Type`
     - Value: `application/json`

2. **Set Body (raw JSON):**
```json
{
  "message": "How do I check my data usage?"
}
```

3. **Click Send**

4. **Expected Response:**
```json
{
  "success": true,
  "intent": "DATA_USAGE",
  "reply": "📊 **Data Usage Information**\n\nYou can check your data usage in the Dashboard...",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

---

### Method 3: Using Browser (GET requests only)

Open in browser:
- Health: `http://localhost:3000/api/bot/health`
- Intents: `http://localhost:3000/api/bot/intents`

Note: POST requests need a tool like Postman or curl.

---

### Method 4: Testing in React Native App

1. **Start the backend server** (if not already running)

2. **Update the API URL in ChatBot.tsx:**
   - For iOS Simulator: Already set to `http://localhost:3000/api/bot`
   - For Android Emulator: Change to `http://10.0.2.2:3000/api/bot`
   - For Physical Device: Change to `http://YOUR_IP:3000/api/bot`

3. **Run the React Native app:**
```bash
# iOS
npm run ios

# Android
npm run android
```

4. **Test in the app:**
   - Tap the robot icon (🤖) on Dashboard
   - Try these example messages:

---

## Example Test Cases

### Category: Greetings & Basic
```
"Hello"
"Hi there"
"Hey"
"Help me"
```

### Category: Data Usage
```
"How do I check my data usage?"
"Show me my data consumption"
"How much data have I used?"
"Data remaining"
"Check data"
"I'm running out of data"
"Low data warning"
```

### Category: Billing
```
"Show my bills"
"Billing information"
"Payment due date"
"How do I pay my bill?"
"Payment methods"
```

### Category: Plans
```
"What plans are available?"
"Service plans"
"I want to upgrade my plan"
"Change plan"
"Better plan with more data"
```

### Category: SIM Management
```
"How do I activate eSIM?"
"eSIM information"
"Physical SIM card"
"Swap SIM"
"Replace SIM card"
"Lost my SIM"
```

### Category: Service Management
```
"Switch service"
"Change service"
"Multiple services"
"Other service"
```

### Category: PIN Management
```
"Change PIN"
"Update PIN"
"Reset PIN"
"Forgot PIN"
"Lost PIN"
```

### Category: Usage History
```
"Usage history"
"Past usage"
"Previous usage data"
"Usage breakdown"
"Detailed usage"
```

### Category: Store & Shopping
```
"Browse plans"
"Buy new plan"
"Shopping cart"
"Store"
"Purchase plan"
```

### Category: Notifications
```
"View notifications"
"Notification settings"
"Alerts"
```

### Category: Terms & Privacy
```
"Terms and conditions"
"Privacy policy"
"T&C"
```

### Category: Goodbye
```
"Thank you"
"Thanks"
"Bye"
"Goodbye"
"That's all"
```

---

## Complete Test Script (Bash)

Save this as `test-bot.sh`:

```bash
#!/bin/bash

BASE_URL="http://localhost:3000/api/bot"

echo "=== Testing ChatBot Backend ==="
echo ""

echo "1. Health Check..."
curl -s $BASE_URL/health | jq .
echo ""

echo "2. Get Intents..."
curl -s $BASE_URL/intents | jq '.count'
echo ""

echo "3. Test Greeting..."
curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}' | jq '.intent'
echo ""

echo "4. Test Data Usage..."
curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I check my data usage?"}' | jq '.intent'
echo ""

echo "5. Test Billing..."
curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Show my bills"}' | jq '.intent'
echo ""

echo "6. Test Plans..."
curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "What plans are available?"}' | jq '.intent'
echo ""

echo "7. Test eSIM..."
curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I activate eSIM?"}' | jq '.intent'
echo ""

echo "8. Test Fallback..."
curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Random text that makes no sense"}' | jq '.intent'
echo ""

echo "=== Testing Complete ==="
```

Make it executable and run:
```bash
chmod +x test-bot.sh
./test-bot.sh
```

---

## Testing with Context (Advanced)

You can also send context data with messages:

```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{
    "message": "How much data have I used?",
    "context": {
      "selectedService": {
        "id": "123",
        "planName": "Premium Plan",
        "svcNo": "0412345678"
      },
      "dataUsage": {
        "used": "45GB",
        "total": "100GB"
      }
    }
  }'
```

---

## Expected Responses Examples

### Greeting Response:
```
Hello! 👋 I'm your Vocus support assistant. How can I help you today? You can ask me about:

• Data usage and plans
• Billing and payments
• SIM management (eSIM/Physical SIM)
• Service switching
• PIN management
• Usage history
• Store and plans
• Notifications

What would you like to know?
```

### Data Usage Response:
```
📊 **Data Usage Information**

You can check your data usage in the Dashboard:
1. Go to the Home screen
2. View the circular progress bar showing your data consumption
3. Tap the info icon (ℹ️) for detailed usage breakdown

For more detailed analysis:
• Tap the 'Usage' tab at the bottom
• View usage history and breakdowns
• Check data, voice, and messaging usage separately

Need help understanding your usage? Just ask!
```

### Billing Response:
```
💳 **Billing Information**

To view your bills:
1. Tap the 'Billing' tab at the bottom
2. View your current and past bills
3. Tap any bill to see detailed breakdown

**Bill Details Include:**
• Service charges
• Data usage charges
• Addon charges
• Payment due date
• Payment history

Need help with a specific bill? Let me know!
```

---

## Troubleshooting

### Issue: Connection Refused
**Solution:** Make sure the backend server is running
```bash
cd help-bot-backend
npm run dev
```

### Issue: CORS Error
**Solution:** CORS is enabled by default. If you still see errors, check the backend logs.

### Issue: Invalid Response
**Solution:** Check the request format. Make sure:
- Content-Type header is set to `application/json`
- Body is valid JSON
- Message field is present

### Issue: Wrong Intent Detected
**Solution:** Check the intent detection logic in `bot.service.js`. You can add more keywords to improve detection.

---

## Quick Test Checklist

- [ ] Backend server is running
- [ ] Health check returns success
- [ ] Can get list of intents
- [ ] Greeting message works
- [ ] Data usage query works
- [ ] Billing query works
- [ ] Plans query works
- [ ] eSIM query works
- [ ] Fallback works for unknown queries
- [ ] React Native app can connect (if testing in app)

---

## Performance Testing

Test response times:
```bash
time curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

Expected: < 100ms response time for local server.

---

## Next Steps

1. Test all example queries above
2. Try variations of the same questions
3. Test in the React Native app
4. Monitor server logs for errors
5. Customize responses in `botResponses.js` if needed
