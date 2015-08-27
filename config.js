(function() {

    return {
        influxdb: {
            host: process.env.INFLUXDB_HOST || "localhost",
            port: process.env.INFLUXDB_PORT || 8086,
            database: process.env.INFLUXDB_DATABASE || "statsd",
            username: process.env.INFLUXDB_USERNAME || "root",
            password: process.env.INFLUXDB_PASSWORD || "root",
            flush: {
                enable: true
            },
            proxy: {
                enable: false,
                suffix: 'raw',
                flushInterval: 1000
            }
        },
        log: {
            level: "LOG_WARNING"
        },
        port: 8125,
        backends: ['./backends/console', 'statsd-influxdb-backend'],
        debug: process.env.STATSD_DEBUG || false,
        legacyNamespace: false
    };
})();
