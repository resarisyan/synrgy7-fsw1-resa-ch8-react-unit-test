# Stage 1: Build the React application
FROM node:latest as build

WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the project
RUN npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx:latest

# Copy the build output from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 5173

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
