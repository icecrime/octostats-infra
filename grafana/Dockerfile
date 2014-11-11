FROM centos:centos6
MAINTAINER Daekwon Kim <propellerheaven@gmail.com>

RUN rpm -iUvh http://dl.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
RUN yum update -y
RUN yum -y install httpd tar

RUN cd /opt && curl -o grafana.tar.gz http://grafanarel.s3.amazonaws.com/grafana-1.8.1.tar.gz && tar xvzf grafana.tar.gz && mv grafana-1.8.1 grafana

RUN mkdir -p /opt/grafana/config

ADD ./config.js /opt/grafana/config.js
ADD ./grafana.conf /etc/httpd/conf.d/grafana.conf
ADD ./setup_configs.sh /opt/grafana/setup_configs.sh
ADD ./run.sh /opt/grafana/run.sh

WORKDIR /opt/grafana

EXPOSE 8000
CMD ./setup_configs.sh && ./run.sh

