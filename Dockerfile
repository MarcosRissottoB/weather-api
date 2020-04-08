FROM node:12

WORKDIR /usr/src/weahter_api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "src/index.js" ]