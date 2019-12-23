FROM node:alpine3.10
RUN mkdir wdio
COPY ./ /wdio
WORKDIR /wdio
RUN npm install