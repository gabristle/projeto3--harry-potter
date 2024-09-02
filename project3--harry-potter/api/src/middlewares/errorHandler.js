import logger from '../../logger.js';

const errorHandler = (err, req, res, next) => {
    logger.error(`Error occurred: ${err.message}`);
    res.on('finish', () => {
        logger.error(`Response: ${err.message} ${req.method} ${req.originalUrl}`);
    });
    res.status(500).send('Internal Server Error');
};

export default errorHandler;