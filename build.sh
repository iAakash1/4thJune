#!/bin/bash

# Install dependencies for all packages
echo "📦 Installing dependencies..."
npm install
cd client && npm install --legacy-peer-deps
cd ../server && npm install

# Build the React app
echo "🏗️ Building React application..."
cd ../client && npm run build

echo "✅ Build complete! Ready for deployment."
