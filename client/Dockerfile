# https://github.com/shakyShane/cra-docker/blob/master/Dockerfile
# 1. Use the node apline image as the base stage of a multi-stage routine
FROM node:16.15.0-alpine as base

# 2. Set the working directory to /client
WORKDIR /client

# 3. Copy both package.json and package-lock.json into /client in the image's filesystem
COPY package*.json yarn.lock ./

RUN  yarn 
COPY . ./
RUN yarn build