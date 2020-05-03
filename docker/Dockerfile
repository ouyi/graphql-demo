FROM node:14.1-alpine3.11

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .babelrc ./

# https://github.com/nodejs/docker-node/issues/282
RUN apk --update --no-cache --virtual build-dependencies add python make g++ \
    && npm install \
    && apk del build-dependencies

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY src ./src

EXPOSE 8080
CMD [ "npm", "start" ]
