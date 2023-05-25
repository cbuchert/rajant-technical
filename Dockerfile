# Build Phase
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
COPY package-lock.json .
RUN npm i --omit=dev
COPY . .
RUN npm run build

# Run Phase, using Caddy
FROM abiosoft/caddy:1.0.3
COPY --from=builder /app/build /srv
COPY Caddyfile /etc/Caddyfile
EXPOSE 3000
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout"]
