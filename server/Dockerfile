FROM mhart/alpine-node:6

ADD package.json /tmp/package.json
RUN cd /tmp \
    && npm install \
    && mkdir -p /opt/app \
    && cp -a /tmp/node_modules /opt/app/

WORKDIR   /opt/app
ADD     . /opt/app

CMD [ "node", "index.js" ]
