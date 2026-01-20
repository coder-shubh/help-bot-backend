#!/bin/bash

# ChatBot Backend Test Script
# This script tests various chatbot intents

BASE_URL="http://localhost:3000/api/bot"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Testing ChatBot Backend ===${NC}"
echo ""

# Test 1: Health Check
echo -e "${GREEN}1. Health Check...${NC}"
response=$(curl -s $BASE_URL/health)
if echo "$response" | grep -q "success"; then
    echo -e "${GREEN}✓ Health check passed${NC}"
    echo "$response" | jq . 2>/dev/null || echo "$response"
else
    echo -e "${RED}✗ Health check failed${NC}"
    echo "$response"
fi
echo ""

# Test 2: Get Intents
echo -e "${GREEN}2. Get Available Intents...${NC}"
response=$(curl -s $BASE_URL/intents)
intent_count=$(echo "$response" | jq -r '.count' 2>/dev/null)
if [ ! -z "$intent_count" ]; then
    echo -e "${GREEN}✓ Found $intent_count intents${NC}"
else
    echo -e "${RED}✗ Failed to get intents${NC}"
    echo "$response"
fi
echo ""

# Test 3: Greeting
echo -e "${GREEN}3. Test Greeting...${NC}"
response=$(curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello"}')
intent=$(echo "$response" | jq -r '.intent' 2>/dev/null)
if [ "$intent" = "GREETING" ]; then
    echo -e "${GREEN}✓ Greeting intent detected correctly${NC}"
else
    echo -e "${RED}✗ Expected GREETING, got: $intent${NC}"
fi
echo "$response" | jq -r '.reply' | head -3
echo ""

# Test 4: Data Usage
echo -e "${GREEN}4. Test Data Usage Query...${NC}"
response=$(curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I check my data usage?"}')
intent=$(echo "$response" | jq -r '.intent' 2>/dev/null)
if [ "$intent" = "DATA_USAGE" ]; then
    echo -e "${GREEN}✓ Data usage intent detected correctly${NC}"
else
    echo -e "${RED}✗ Expected DATA_USAGE, got: $intent${NC}"
fi
echo "$response" | jq -r '.reply' | head -3
echo ""

# Test 5: Billing
echo -e "${GREEN}5. Test Billing Query...${NC}"
response=$(curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Show my bills"}')
intent=$(echo "$response" | jq -r '.intent' 2>/dev/null)
if [ "$intent" = "BILLING" ]; then
    echo -e "${GREEN}✓ Billing intent detected correctly${NC}"
else
    echo -e "${RED}✗ Expected BILLING, got: $intent${NC}"
fi
echo "$response" | jq -r '.reply' | head -3
echo ""

# Test 6: Plans
echo -e "${GREEN}6. Test Plans Query...${NC}"
response=$(curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "What plans are available?"}')
intent=$(echo "$response" | jq -r '.intent' 2>/dev/null)
if [ "$intent" = "PLANS" ]; then
    echo -e "${GREEN}✓ Plans intent detected correctly${NC}"
else
    echo -e "${RED}✗ Expected PLANS, got: $intent${NC}"
fi
echo "$response" | jq -r '.reply' | head -3
echo ""

# Test 7: eSIM
echo -e "${GREEN}7. Test eSIM Query...${NC}"
response=$(curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "How do I activate eSIM?"}')
intent=$(echo "$response" | jq -r '.intent' 2>/dev/null)
if [ "$intent" = "ESIM" ]; then
    echo -e "${GREEN}✓ eSIM intent detected correctly${NC}"
else
    echo -e "${RED}✗ Expected ESIM, got: $intent${NC}"
fi
echo "$response" | jq -r '.reply' | head -3
echo ""

# Test 8: PIN Change
echo -e "${GREEN}8. Test PIN Change Query...${NC}"
response=$(curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "I want to change my PIN"}')
intent=$(echo "$response" | jq -r '.intent' 2>/dev/null)
if [ "$intent" = "CHANGE_PIN" ]; then
    echo -e "${GREEN}✓ PIN change intent detected correctly${NC}"
else
    echo -e "${RED}✗ Expected CHANGE_PIN, got: $intent${NC}"
fi
echo "$response" | jq -r '.reply' | head -3
echo ""

# Test 9: Store
echo -e "${GREEN}9. Test Store Query...${NC}"
response=$(curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "I want to buy a new plan"}')
intent=$(echo "$response" | jq -r '.intent' 2>/dev/null)
if [ "$intent" = "STORE" ]; then
    echo -e "${GREEN}✓ Store intent detected correctly${NC}"
else
    echo -e "${RED}✗ Expected STORE, got: $intent${NC}"
fi
echo "$response" | jq -r '.reply' | head -3
echo ""

# Test 10: Fallback (Unknown)
echo -e "${GREEN}10. Test Fallback (Unknown Query)...${NC}"
response=$(curl -s -X POST $BASE_URL/message \
  -H "Content-Type: application/json" \
  -d '{"message": "What is the weather today?"}')
intent=$(echo "$response" | jq -r '.intent' 2>/dev/null)
if [ "$intent" = "UNKNOWN" ] || [ "$intent" = "FALLBACK" ]; then
    echo -e "${GREEN}✓ Fallback intent detected correctly${NC}"
else
    echo -e "${YELLOW}⚠ Expected FALLBACK/UNKNOWN, got: $intent${NC}"
fi
echo "$response" | jq -r '.reply' | head -3
echo ""

echo -e "${YELLOW}=== Testing Complete ===${NC}"
echo ""
echo "To test more queries, use:"
echo "curl -X POST $BASE_URL/message \\"
echo "  -H \"Content-Type: application/json\" \\"
echo "  -d '{\"message\": \"Your question here\"}'"
