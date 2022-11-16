## Dockerfile for nextjs taken & modified from https://nextjs.org/docs/deployment#docker-image

# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# Removed to try rebuild
# RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN if [[ -f "package-lock.json" ]]; then npm ci --legacy-peer-deps; else npm install --legacy-peer-deps; fi

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/*next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /app/.next
USER nextjs

ARG NODE_PORT=3000
EXPOSE $NODE_PORT

# Disable telemetry since our infra blocks outbound connection to internet
RUN npx next telemetry disable

CMD ["node", "node_modules/next/dist/bin/next", "start"]
