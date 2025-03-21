# Use Node.js 18 based on Alpine for a smaller image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (will be created later)
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose Vite's default port
EXPOSE 5173

# Command to start the Vite development server
CMD ["npm", "run", "dev"]
