# Use Node.js as the base image
FROM node:18-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Install necessary build tools for node-gyp and better-sqlite3
RUN apk add --no-cache \
    python3 \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    nasm \
    bash \
    vips-dev \
    git

# Set Python alias for node-gyp
RUN ln -sf python3 /usr/bin/python

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./
RUN npm install

# Copy the entire Strapi application code
COPY . .

# Ensure the node user has permissions on the app directory
RUN chown -R node:node /app

# Set environment and expose the Strapi port
ENV NODE_ENV=development
EXPOSE 1337

# Run as node user
USER node

# Set the default command to run Strapi in development mode
CMD ["npm", "run", "develop"]
