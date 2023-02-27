# build
FROM node:16.19.0-alpine AS build-image
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . . 
ARG ENV_FILE=.env.dev
COPY $ENV_FILE .env
RUN npm run build

# run
FROM nginx:stable-alpine AS run-image
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-image /app/build /usr/share/nginx/html
EXPOSE 80