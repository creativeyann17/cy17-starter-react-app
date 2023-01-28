# build
FROM node:16.16.0-alpine AS build-image
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . . 
COPY .env.production /app/.env
RUN npm run build

# run
FROM nginx:stable-alpine AS run-image
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-image /app/build /usr/share/nginx/html
EXPOSE 80