# Stage 0: Development
FROM node:16-alpine AS development

WORKDIR /usr/src/client

# Copy package.json and package-lock.json to WORKDIR
COPY package*.json .

RUN npm install

# Copy all source files to WORKDIR
COPY . .

# Expose the port for development
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]

# Stage 1: Build
FROM node:16-alpine AS build

WORKDIR /usr/src/client

# Copy package.json and package-lock.json to WORKDIR
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files to WORKDIR
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve
FROM node:16-alpine AS serve

WORKDIR /usr/src/client

# Copy only the build output and package.json to WORKDIR
COPY --from=build /usr/src/client/dist ./dist
COPY package*.json .
COPY vite.config.ts .

# Install only production dependencies
RUN npm ci --only=production

# Expose the port for the application
EXPOSE 8000

# Command to run the application
CMD ["npm", "run", "preview"]