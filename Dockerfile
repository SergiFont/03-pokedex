
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Expose the desired TCP port
EXPOSE 3000

# Install the application dependencies
RUN npm install

# Define the entry point for the container
CMD ["npm", "start"]