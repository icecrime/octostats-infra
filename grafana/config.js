define(['settings'],
       function (Settings) {
           "use strict";

           return new Settings({
               datasources: {
                 metrics: {
                   type: 'influxdb',
                   url: 'http://INFLUXDB_HOST:INFLUXDB_PORT/db/github',
                   username: 'root',
                   password: 'root'
                 },
                 grafana: {
                   type: 'influxdb',
                   url: 'http://INFLUXDB_HOST:INFLUXDB_PORT/db/grafana',
                   username: 'root',
                   password: 'root',
                   grafanaDB: true
                 }
               }
           });
       });
