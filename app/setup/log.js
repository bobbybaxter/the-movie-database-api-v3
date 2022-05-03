const pino = require( 'pino' );

module.exports = config => {
  const logger = pino( {
    level: config.logging.level || 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: config.logging.prettyPrint,
        ignore: 'pid,hostname,reqId,responseTime',
        singleLine: true 
      },
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  } );

  const expressPino = require( 'express-pino-logger' )( { 
    logger,
    serializers: {
      req: ( { method, url } ) => `${ method } ${ url }`,
      res: ( { statusCode } ) => `statusCode: ${ statusCode }`
    }
  } );

  return expressPino;
};
