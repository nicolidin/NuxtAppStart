#!/bin/bash

# Navigate to the parent directory of the Scripts folder
cd "$(dirname "$0")/.."

# Delete Strapi dependencies
if [ -d "Strapi" ]; then
  echo "Deleting Strapi dependencies..."
  cd Strapi
  sudo rm -rf .strapi
  sudo rm -rf node_modules
  cd ..
else
  echo "Strapi directory not found."
fi

# Delete NuxtApp dependencies and build files
if [ -d "NuxtApp" ]; then
  echo "Deleting NuxtApp dependencies and build files..."
  cd NuxtApp
  sudo rm -rf node_modules .nuxt .output
  cd ..
else
  echo "NuxtApp directory not found."
fi
