FROM node:latest

WORKDIR .

COPY ./app ./

RUN npm install

COPY ./app .

EXPOSE 3001

CMD ["node", "index.js"]
