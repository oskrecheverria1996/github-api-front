FROM node:18-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]