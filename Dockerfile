FROM node:alpine

ENV PORT ${PORT:-3002}
RUN apk update && apk add bash
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app

# Install PM2 globally
RUN yarn global add pm2

# Copy "package.json" and "old.package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

# Install dependencies
RUN yarn install --production

# Copy all files
COPY --chown=node:node . /usr/src/app

# Build app
RUN yarn build

# Expose the listening port
EXPOSE $PORT

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Launch app with PM2
CMD [ "pm2-runtime", "start", "yarn", "--interpreter", "bash", "--", "start" ]