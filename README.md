# Help Bot Backend

Backend API for the Vocus mobile app chatbot feature.

## Features

- Intelligent intent detection for user queries
- Comprehensive responses covering all app features:
  - Data usage tracking
  - Billing and payments
  - Service plans (Voice+Data, Data Only, 4G Backup)
  - SIM management (eSIM, Physical SIM)
  - Service switching
  - PIN management
  - Usage history
  - Store and shopping
  - Notifications
  - Terms & Privacy

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Update `.env` with your configuration:
```
PORT=3000
NODE_ENV=development
```

4. Start the server:
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:3000` (or your configured PORT).

## API Endpoints

### POST `/api/bot/message`
Send a message to the bot and get a response.

**Request Body:**
```json
{
  "message": "How do I check my data usage?",
  "context": {
    "selectedService": {...},
    "dataUsage": {...}
  }
}
```

**Response:**
```json
{
  "success": true,
  "intent": "DATA_USAGE",
  "reply": "📊 **Data Usage Information**\n\n...",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### GET `/api/bot/intents`
Get list of all available intents (for testing/debugging).

**Response:**
```json
{
  "success": true,
  "intents": [
    {
      "key": "DATA_USAGE",
      "intent": "DATA_USAGE"
    },
    ...
  ],
  "count": 25
}
```

### GET `/api/bot/health`
Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Bot service is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## Supported Intents

The bot recognizes the following intents:

- **GREETING** - Hello, hi, help
- **GOODBYE** - Bye, thanks, done
- **DATA_USAGE** - Data usage queries
- **DATA_LOW** - Low data warnings
- **BILLING** - Bill information
- **PAYMENT** - Payment methods and due dates
- **PLANS** - Service plans information
- **PLAN_UPGRADE** - Plan upgrade queries
- **ESIM** - eSIM activation and information
- **PHYSICAL_SIM** - Physical SIM information
- **SIM_SWAP** - SIM swap requests
- **SWITCH_SERVICE** - Service switching
- **CHANGE_PIN** - PIN change
- **RESET_PIN** - PIN reset
- **USAGE_HISTORY** - Usage history
- **USAGE_BREAKDOWN** - Detailed usage breakdown
- **STORE** - Store and shopping
- **CART** - Shopping cart
- **NOTIFICATIONS** - Notifications
- **TERMS_CONDITIONS** - Terms & Conditions
- **PRIVACY_POLICY** - Privacy Policy
- **PROFILE** - Profile information
- **HELP** - General help
- **FALLBACK** - Unknown queries

## Integration with React Native App

Update your app's API configuration to point to this backend:

```typescript
// In your app config
const BOT_API_URL = 'http://localhost:3000/api/bot'; // Development
// const BOT_API_URL = 'https://your-domain.com/api/bot'; // Production
```

## Development

- Uses Express.js for the server
- CORS enabled for cross-origin requests
- JSON body parsing
- Error handling included

## Testing

Test the API using curl:

```bash
# Health check
curl http://localhost:3000/api/bot/health

# Send message
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I check my data usage?"}'

# Get intents
curl http://localhost:3000/api/bot/intents
```

## License

ISC
