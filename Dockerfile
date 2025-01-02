# Use a lightweight Node.js image
FROM node:14-alpine

ARG FOLDER

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY ./${FOLDER}/package*.json ./

# Install dependencies
RUN npm install

# Copy application soruce code
COPY ./${FOLDER}/ .

# Expose the application port
EXPOSE 3000 3001

# Start the application
CMD ["npm", "start"]
