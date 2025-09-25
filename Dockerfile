FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

ARG NUXT_PUBLIC_API_URL

ENV NUXT_PUBLIC_API_URL=${NUXT_PUBLIC_API_URL}
ENV NODE_ENV=production

# Build the application
RUN yarn build

# Expose port
EXPOSE 3000

# Start the application (run the built server directly)
CMD ["node", ".output/server/index.mjs"] 