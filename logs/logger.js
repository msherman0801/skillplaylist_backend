const { transports, createLogger, format } = require('winston');

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'logs/error/error.log', level: 'error'}),
        new transports.File({filename: 'logs/activity/info.log', level:'info'})
    ]
});

module.exports = logger