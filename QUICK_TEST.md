# Quick Test Examples

## 🚀 Quick Start

1. **Start the backend:**
```bash
cd help-bot-backend
npm run dev
```

2. **Test in a new terminal:**

---

## 📝 Copy-Paste Test Commands

### Basic Tests

```bash
# 1. Health Check
curl http://localhost:3000/api/bot/health

# 2. Get Intents
curl http://localhost:3000/api/bot/intents

# 3. Greeting
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}'
```

### Common User Queries

```bash
# Data Usage
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I check my data usage?"}'

# Billing
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Show my bills"}'

# Plans
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "What plans are available?"}'

# eSIM
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I activate eSIM?"}'

# Change PIN
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "I want to change my PIN"}'

# Switch Service
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I switch services?"}'

# Store
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "I want to buy a new plan"}'

# Usage History
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Show my usage history"}'
```

---

## 🧪 Run Automated Test Script

```bash
cd help-bot-backend
./test-bot.sh
```

This will test 10 different scenarios automatically.

---

## 📱 Test in React Native App

1. **Update API URL in `src/components/ChatBot.tsx`:**
   - iOS Simulator: `http://localhost:3000/api/bot` ✅ (already set)
   - Android Emulator: `http://10.0.2.2:3000/api/bot`
   - Physical Device: `http://YOUR_IP:3000/api/bot`

2. **Start the app:**
```bash
npm run ios    # or npm run android
```

3. **Test these messages in the app:**
   - "Hello"
   - "How do I check my data usage?"
   - "Show my bills"
   - "What plans are available?"
   - "How do I activate eSIM?"
   - "I want to change my PIN"
   - "Thank you"

---

## 🎯 Expected Results

| Query | Expected Intent | Response Contains |
|-------|----------------|-------------------|
| "Hello" | GREETING | "Hello! 👋" |
| "Data usage" | DATA_USAGE | "📊 **Data Usage**" |
| "Show bills" | BILLING | "💳 **Billing**" |
| "Plans" | PLANS | "📱 **Service Plans**" |
| "eSIM" | ESIM | "📲 **eSIM Information**" |
| "Change PIN" | CHANGE_PIN | "🔐 **Change PIN**" |
| "Store" | STORE | "🛒 **Store**" |
| "Random text" | FALLBACK | "I'm not sure" |

---

## 🔍 Troubleshooting

**Connection Refused?**
- Make sure backend is running: `npm run dev`
- Check port 3000 is available

**Wrong Intent?**
- Check server logs
- Verify message spelling
- Try rephrasing the question

**No Response?**
- Check network connection
- Verify API URL is correct
- Check backend server logs

---

## 💡 Pro Tips

1. **Use jq for better output:**
```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}' | jq .
```

2. **Test with context:**
```bash
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{
    "message": "How much data have I used?",
    "context": {
      "selectedService": {"planName": "Premium Plan"},
      "dataUsage": {"used": "45GB", "total": "100GB"}
    }
  }'
```

3. **Watch server logs:**
   - Keep the `npm run dev` terminal open
   - See requests and responses in real-time

---

For more detailed testing, see `TESTING.md`
