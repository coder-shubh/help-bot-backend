# Troubleshooting ChatBot Connection Issues

## Common Error: "Sorry, I'm having trouble connecting right now"

This error appears when the React Native app cannot connect to the backend server. Follow these steps to fix it:

---

## Step 1: Check if Backend is Running

**Open a terminal and run:**
```bash
cd help-bot-backend
npm run dev
```

**You should see:**
```
Server running on port 3000
```

If you don't see this message, the backend is not running. Start it first!

---

## Step 2: Test Backend Directly

**In a new terminal, test the backend:**
```bash
# Health check
curl http://localhost:3000/api/bot/health

# Should return:
# {"success":true,"message":"Bot service is running","timestamp":"..."}
```

If this fails, the backend is not running correctly.

---

## Step 3: Check Your Device/Emulator Type

The API URL depends on what you're using:

### ✅ iOS Simulator
- **URL:** `http://localhost:3000/api/bot`
- **Status:** Should work automatically
- **Check:** Make sure backend is running on your Mac

### ✅ Android Emulator
- **URL:** `http://10.0.2.2:3000/api/bot`
- **Status:** Should work automatically (code updated to handle this)
- **Note:** Android emulator maps `localhost` to `10.0.2.2`

### ⚠️ Physical Device (iPhone/Android)
- **URL:** `http://YOUR_COMPUTER_IP:3000/api/bot`
- **Steps:**
  1. Find your computer's IP address:
     - **Mac:** Run `ifconfig | grep "inet " | grep -v 127.0.0.1`
     - **Windows:** Run `ipconfig` and look for IPv4 Address
     - **Linux:** Run `hostname -I`
  
  2. Update `src/components/ChatBot.tsx`:
     ```typescript
     const BOT_API_URL = 'http://192.168.1.XXX:3000/api/bot'; // Replace XXX with your IP
     ```
  
  3. Make sure:
     - Phone and computer are on the same WiFi network
     - Firewall allows connections on port 3000
     - Backend is running

---

## Step 4: Check Network Connectivity

### For Physical Devices:
1. **Same WiFi Network:**
   - Phone and computer must be on the same WiFi
   - Check WiFi settings on both devices

2. **Firewall:**
   - Mac: System Preferences → Security & Privacy → Firewall
   - Windows: Windows Defender Firewall
   - Allow Node.js/port 3000

3. **Test Connection:**
   - Open browser on phone
   - Go to: `http://YOUR_IP:3000/api/bot/health`
   - Should see JSON response

---

## Step 5: Check Console Logs

The updated code now logs detailed information. Check your React Native console:

**Look for:**
```
Sending request to: http://...
Request body: {...}
Response status: 200
Response data: {...}
```

**If you see errors:**
- `Network request failed` → Backend not running or wrong URL
- `Failed to fetch` → Network connectivity issue
- `Server error: 500` → Backend has an error (check backend logs)

---

## Step 6: Verify Backend Configuration

**Check `help-bot-backend/src/app.js`:**
```javascript
app.use(cors()); // Should be enabled
app.use(express.json()); // Should be enabled
```

**Check `help-bot-backend/src/server.js`:**
```javascript
const PORT = process.env.PORT || 3000; // Should be 3000
```

---

## Quick Fix Checklist

- [ ] Backend server is running (`npm run dev` in help-bot-backend folder)
- [ ] Backend responds to `curl http://localhost:3000/api/bot/health`
- [ ] Using correct URL for your device type:
  - iOS Simulator: `http://localhost:3000/api/bot`
  - Android Emulator: `http://10.0.2.2:3000/api/bot`
  - Physical Device: `http://YOUR_IP:3000/api/bot`
- [ ] Phone and computer on same WiFi (for physical devices)
- [ ] Firewall allows port 3000
- [ ] Check React Native console for detailed error messages

---

## Testing Without Backend (Fallback Mode)

If you want to test the UI without the backend, you can temporarily modify the code to use local responses. However, it's better to get the backend working.

---

## Still Not Working?

1. **Check Backend Logs:**
   - Look at the terminal where `npm run dev` is running
   - See if requests are reaching the backend

2. **Test with Postman/curl:**
   ```bash
   curl -X POST http://localhost:3000/api/bot/message \
     -H "Content-Type: application/json" \
     -d '{"message": "Hello"}'
   ```

3. **Check React Native Metro Bundler:**
   - Make sure Metro is running
   - Try reloading the app (Cmd+R / Ctrl+R)

4. **Restart Everything:**
   - Stop backend (Ctrl+C)
   - Stop Metro bundler
   - Restart backend: `npm run dev`
   - Restart Metro: `npm start`
   - Reload app

---

## Platform-Specific Notes

### iOS Simulator
- Uses `localhost` directly
- Should work out of the box
- No firewall issues usually

### Android Emulator
- Uses `10.0.2.2` instead of `localhost`
- Code now handles this automatically
- If still failing, check emulator network settings

### Physical Devices
- Requires your computer's IP address
- Must be on same network
- Firewall must allow connections
- Most common source of issues

---

## Example Working Configuration

**For Physical iPhone on same WiFi:**

1. Find Mac IP: `192.168.1.105`
2. Update ChatBot.tsx:
   ```typescript
   const BOT_API_URL = 'http://192.168.1.105:3000/api/bot';
   ```
3. Start backend: `npm run dev`
4. Test in app

---

## Need More Help?

Check the console logs - the updated code now provides detailed error messages that will help identify the exact issue!
