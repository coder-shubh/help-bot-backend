# Backend Setup Guide

## Quick Start

1. **Navigate to backend directory:**
```bash
cd help-bot-backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
cp .env.example .env
```

4. **Start the server:**
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

The server will run on `http://localhost:3000`

## Connecting React Native App

### For iOS Simulator:
- Use `http://localhost:3000/api/bot`

### For Android Emulator:
- Use `http://10.0.2.2:3000/api/bot` (Android emulator maps localhost to 10.0.2.2)

### For Physical Devices:
1. Find your computer's IP address:
   - **Mac/Linux:** Run `ifconfig` or `ipconfig getifaddr en0`
   - **Windows:** Run `ipconfig` and look for IPv4 Address
   
2. Update `BOT_API_URL` in `src/components/ChatBot.tsx`:
```typescript
const BOT_API_URL = 'http://YOUR_IP_ADDRESS:3000/api/bot';
// Example: const BOT_API_URL = 'http://192.168.1.100:3000/api/bot';
```

3. Make sure your phone and computer are on the same WiFi network

4. Ensure firewall allows connections on port 3000

## Testing the Backend

### Using curl:
```bash
# Health check
curl http://localhost:3000/api/bot/health

# Send a message
curl -X POST http://localhost:3000/api/bot/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I check my data usage?"}'
```

### Using Postman:
1. Create a POST request to `http://localhost:3000/api/bot/message`
2. Set Headers: `Content-Type: application/json`
3. Set Body (raw JSON):
```json
{
  "message": "How do I check my data usage?",
  "context": {}
}
```

## Production Deployment

For production, you'll need to:

1. Deploy the backend to a cloud service (Heroku, AWS, DigitalOcean, etc.)
2. Update `BOT_API_URL` in the React Native app to point to your production URL
3. Set environment variables on your hosting platform
4. Enable HTTPS for secure connections

## Troubleshooting

### Connection Refused
- Make sure the backend server is running
- Check if the port (3000) is correct
- Verify firewall settings

### Network Request Failed (React Native)
- Check if you're using the correct URL format
- For physical devices, ensure you're using your computer's IP, not localhost
- Verify both devices are on the same network
- Check if CORS is properly configured (should be enabled by default)

### CORS Errors
- The backend has CORS enabled by default
- If you still see CORS errors, check the `cors` configuration in `src/app.js`
