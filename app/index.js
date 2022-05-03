const serverFactory = require( './server' );
const middlewareFactory = require( './middleware' );
const logFactory = require( './setup/log' );

module.exports = config => {
  const log = logFactory( config ).logger;

  const app = {
    config,
    log
  };

  app.middleware = middlewareFactory( app );
  app.server = serverFactory( app );
  
  return app;
};