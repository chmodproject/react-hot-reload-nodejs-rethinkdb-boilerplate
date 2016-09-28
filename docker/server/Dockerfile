FROM node:6.5.0

RUN mkdir /src

RUN npm install nodemon -g
RUN npm install babel-watch@2.0.2 -g
RUN npm install babel-core -g
RUN npm install -g webpack webpack-dev-server

#webpack --config webpack.config.dev.js --watch --progress

WORKDIR /src

EXPOSE 3001
CMD npm start
