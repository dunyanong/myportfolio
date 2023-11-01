# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Expose the port your application will run on
EXPOSE 3000

# Start your Next.js application
CMD ["npm", "start"]