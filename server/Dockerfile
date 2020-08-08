FROM node:14.7.0
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
RUN npm run build
COPY ./build .

# Don't use PM2
# https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/
# https://stackoverflow.com/questions/51191378/what-is-the-point-of-using-pm2-and-docker-together

# When creating an image, you can bypass the package.json's start command and bake it directly into the image itself.
# First off this reduces the number of processes running inside of your container.
# Secondly it causes exit signals such as SIGTERM and SIGINT to be received by the Node.js process instead of npm swallowing them.
CMD node build/server.js
