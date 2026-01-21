# ---------- Stage 1: Build frontend ----------
FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build


# ---------- Stage 2: Backend ----------
FROM node:20-alpine

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install --omit=dev

COPY backend/ .

# Copy frontend build output
COPY --from=frontend-builder /app/frontend/dist ./public

EXPOSE 5000
CMD ["node", "index.js"]
