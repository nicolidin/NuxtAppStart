# Use Node.js as the base image
FROM node:20-bullseye AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN yarn install

# Copy the Nuxt application code
COPY . .

EXPOSE 3000

