FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./
COPY next.config.mjs ./
COPY tailwind.config.js postcss.config.mjs ./

RUN npm run build

RUN npm prune --production

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
