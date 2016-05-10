FROM monsantoco/min-jessie:latest

RUN apt-get update
RUN apt-get install --yes \
  nginx curl build-essential make gcc g++ python

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install --yes nodejs

ADD package.json /tmp/package.json
RUN cd /tmp \
    && npm install \
    && mkdir -p /opt/app \
    && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app

ADD src               /opt/app/src
ADD .babelrc          /opt/app
ADD package.json      /opt/app
ADD webpack.config.js /opt/app

ADD index.html /usr/share/nginx/html
ADD nginx.conf /etc/nginx/nginx.conf

ENV NODE_ENV  production
ENV BABEL_ENV production

RUN chmod +x node_modules/.bin/*; \
    npm run build; \
    cp -r dist /usr/share/nginx/html

RUN apt-get --purge remove --yes \
  curl make gcc g++ build-essential python nodejs

RUN apt-get autoremove --yes

RUN rm -rf /tmp
RUN rm -rf /opt/app


CMD [ "nginx", "-g", "daemon off;" ]
