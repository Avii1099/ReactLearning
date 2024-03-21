# Use an official Node.js runtime as a parent image
FROM node:20.9.0

# Set the working directory in the container
WORKDIR /app

# Install Vite globally for development
RUN npm install -g vite

# Install dependencies
# This is done before copying project files to cache the dependencies
# and only re-install them if the package.json file changes
COPY package*.json ./
RUN npm install

# Expose the port Vite uses by default
EXPOSE 3000

# Command to run the app using Vite
CMD ["vite", "dev", "--host"]
