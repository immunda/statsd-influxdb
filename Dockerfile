FROM node:0.10.38-slim
MAINTAINER Phil Howell <phil@quae.co.uk>

ADD https://github.com/etsy/statsd/archive/v0.7.2.tar.gz /tmp/
RUN tar xzfC /tmp/v0.7.2.tar.gz /tmp && mv /tmp/statsd-0.7.2 /statsd && rm /tmp/v0.7.2.tar.gz
RUN cd /statsd && npm install statsd-influxdb-backend

ADD config.js /statsd/config.js

EXPOSE 8125/udp 8126/tcp

CMD ["/usr/local/bin/node", "/statsd/stats.js", "/statsd/config.js"]
