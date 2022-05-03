const serverFactory = require( './server' );
const middlewareFactory = require( './middleware' );

module.exports = config => {
  const app = {
    config,
  };
  
  app.middleware = middlewareFactory( app );
  app.server = serverFactory( app );
  
  return app;
};