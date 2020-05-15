FROM node:13-alpine

LABEL author="Balaji"

RUN apk update

RUN mkdir -p /home/apps/react-apps

WORKDIR /home/apps/react-apps

COPY package*.json ./
COPY index* .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]