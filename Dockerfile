# Dockerfile to build a production container which listens on port 80

FROM node:alpine
EXPOSE 80

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# TODO: use a proper webserver!
RUN yarn global add serve

CMD [ "serve", "-s", "build", "-l", "80" ]
