# build
FROM node:18.1-alpine AS build-image
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . . 
RUN npm run build

# run
FROM nginx:stable-alpine AS run-image
COPY --from=build-image /app/build /usr/share/nginx/html
