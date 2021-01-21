FROM node:12.20-slim
RUN mkdir -p /src/app
WORKDIR /src/app
COPY ./ /src/app
RUN npm install
RUN npm test
CMD npm start