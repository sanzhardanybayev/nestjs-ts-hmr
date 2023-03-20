FROM node:16.16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm i