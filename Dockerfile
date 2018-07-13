FROM node:9.11.1-alpine

RUN mkdir -p /app/tmga-api
WORKDIR /app/tmga-api

COPY . .

ENV PATH /app/tmga-api/node_modules/.bin:$PATH
ENV NODE_ENV=production
ENV PORT=3000

ADD package.json /app/tmga-api/package.json
RUN npm install

CMD [ "npm", "start" ]
