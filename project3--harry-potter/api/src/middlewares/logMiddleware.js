import logger from '../../logger.js'

const requestLogger = (req, res, next) => {
    logger.info(`Request: ${req.method} ${req.originalUrl}`);
    res.on('finish', () => {
        logger.info(`Response: ${res.statusCode} ${req.method} ${req.originalUrl}`);
    });
    next();
};

export default requestLogger