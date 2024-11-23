# Use an official Node runtime as a parent image
FROM node:23-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Install the dependencies
RUN npm install

RUN npm i -g serve

# Install additional packages
RUN npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

# Copy the remaining application files to the working directory
COPY . .

# Build the application
RUN npm run build

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist"]