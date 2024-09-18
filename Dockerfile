FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./
COPY next.config.js .sentryclirc app-pocketup-fr.json tsconfig.json sentry.* ./
COPY tailwind.config.js ecosystem.config.js postcss.config.js ./

RUN npm run build

RUN npm prune --production

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
