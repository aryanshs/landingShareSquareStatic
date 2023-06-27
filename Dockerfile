# Use official Node.js image as base
FROM node:latest as build

# Set the working directory
WORKDIR /app

# Copy package*.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . ./

# Build the app for production
RUN npm run build

# Use Nginx to serve the React app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
