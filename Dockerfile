# Set the base image to node:20-alpine
FROM node:20-alpine

# Specify where our app will live in the container
WORKDIR /app

# Copy the React App to the container
COPY . /app/

# Prepare the container for building React
RUN yarn install