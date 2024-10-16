FROM node:16-alpine as development

WORKDIR /usr/src/app

# Copy package.json and package-lock.json to WORKDIR
COPY package*.json .

RUN npm install

# Copy all source files to WORKDIR
COPY . .

# Expose the port for development
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]

# Stage 2: Build
FROM node:16-alpine as build

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

# Build the application
RUN npm run build

# Stage 3: Production
FROM node:16-alpine as production

WORKDIR /usr/src/app

# Copy only the build output and package.json to WORKDIR
COPY --from=build /usr/src/app/dist ./dist
COPY package*.json .

# Install only production dependencies
RUN npm ci --only=production

EXPOSE 8000

# Command to run the production server
CMD ["npm", "run", "preview"]