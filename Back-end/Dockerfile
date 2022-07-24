FROM node:16.10-alpine AS build

# Add Maintainer Info
LABEL maintainer="William Alejandro Serna Campuzano"

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY . .
RUN npm install -g nodemon
RUN npm install

CMD [ "nodemon", "app.js" ]