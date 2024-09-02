import winston from 'winston';

const { combine, timestamp, json, printf } = winston.format;

const consoleFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp(),
        json()
    ),
    transports: [
        new winston.transports.Console({ format: consoleFormat }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.File({ filename: 'errors.log', level: 'error' })
    ]
});

export default logger;