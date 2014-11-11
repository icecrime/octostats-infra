#!/bin/bash

[ -f /opt/grafana/config ] && cp /opt/grafana/config/config.js /opt/grafana/config.js

sed -i -e "s/INFLUXDB_HOST/${INFLUX_PORT_8086_TCP_ADDR}/g" ./config.js
sed -i -e "s/INFLUXDB_PORT/${INFLUX_PORT_8086_TCP_PORT}/g" ./config.js
