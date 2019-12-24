FROM timbru31/java-node
RUN mkdir wdio
COPY ./ /wdio
RUN rm -rf ./node_modules
WORKDIR /wdio
RUN chmod +x ./wait-for-it.sh
RUN npm install