FROM node:16.15.0-alpine
ENV NODE_ENV development
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./

EXPOSE 3000

CMD [ "yarn", "start" ]