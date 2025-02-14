FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

COPY --chown=node:node . ./

RUN npm ci

ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000