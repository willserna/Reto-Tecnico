FROM node:16.10-alpine AS build

# Add Maintainer Info
LABEL maintainer="William Alejandro Serna Campuzano"

WORKDIR /usr/src/app

#expose the port
EXPOSE 4200

COPY package.json package-lock.json ./
COPY . .
RUN npm install
RUN npm install -g @angular/cli@8.0.6
RUN npm run build --prod


CMD ["ng","serve","--host", "0.0.0.0"]
