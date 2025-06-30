#Base Image
FROM node:20
#Set the working directory
WORKDIR /app
# Copy package files and install dependencies
COPY package*.json ./
RUN npm install
# COPY the remaining files
COPY . .
# Expose port
EXPOSE 3000
# Run the application
CMD ["node", "server.js"]


