FROM node:16.15.0-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
HEALTHCHECK --interval=30s --timeout=3s --start-period=2s --retries=3 CMD curl --fail http://localhost/ || exit 1
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
