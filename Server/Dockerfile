# Use Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json & install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose backend port
EXPOSE 8000

# Start the app
CMD ["npm", "start"]
