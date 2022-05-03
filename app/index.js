const serverFactory = require( './server' );

module.exports = config => {
  const app = {
    config,
  };
  
  app.server = serverFactory( app );
  
  return app;
};