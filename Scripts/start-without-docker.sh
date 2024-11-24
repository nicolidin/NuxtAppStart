#!/bin/bash

# Navigate to the parent directory of the Scripts folder
cd "$(dirname "$0")/.."

# Call the deletion script
if [ -f "Scripts/delete_dependencies.sh" ]; then
  echo "Running deletion script..."
  bash Scripts/delete_dependencies.sh
else
  echo "Deletion script not found."
fi

# Work with the Strapi application
if [ -d "Strapi" ]; then
  echo "Processing Strapi..."
  cd Strapi
  npm install
  (npx strapi develop &)
  cd ..
else
  echo "Strapi directory not found."
fi

# Work with the Nuxt application
if [ -d "NuxtApp" ]; then
  echo "Processing NuxtApp..."
  cd NuxtApp
  npx yarn
  npx nuxi dev
else
  echo "NuxtApp directory not found."
fi
