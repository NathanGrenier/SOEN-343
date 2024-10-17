#!/bin/sh

# Navigate to the root directory and install npm packages
echo "[LOG]: Installing npm packages in the root directory..."
npm install

# Navigate to the client directory and install npm packages
echo "\n[LOG]: Installing npm packages in the client directory..."
cd packages/client
npm install

# Navigate to the server directory and install npm packages
echo "\n[LOG]: Installing npm packages in the server directory..."
cd ../server
npm install

# Navigate back to the root directory
cd ../../

echo "\n[LOG]: All npm packages have been installed."