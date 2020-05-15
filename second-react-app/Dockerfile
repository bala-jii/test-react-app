FROM node:13-alpine

LABEL author="Balaji"

RUN apk update

RUN apk add yarn

RUN mkdir -p /home/apps/react-apps

WORKDIR /home/apps/react-apps

COPY package.json .
COPY yarn.lock .
COPY public .
COPY src .

RUN npm install -g react-scripts

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]
