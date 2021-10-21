from node:14-alpine

WORKDIR /app

COPY ./package.json /app

RUN npm i

COPY ./index.js /app

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
