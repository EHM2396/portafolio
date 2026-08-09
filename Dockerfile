# syntax=docker/dockerfile:1

# ---- Dependencias ----
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# El lockfile quedó con datos de plataforma (Windows) desalineados para
# resolver optionalDependencies en Linux, así que usamos install en vez de ci.
RUN npm install --no-audit --no-fund

# ---- Build ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# output: "standalone" en next.config.ts genera un server.js autocontenido
RUN npm run build

# ---- Runtime ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
