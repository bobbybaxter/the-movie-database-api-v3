const express = require( 'express' );
const server = express();

module.exports = app => {
  const { log, config } = app;
  const port = config.PORT || 3000;

  const logFactory = require( './setup/log' )( app.config );
  
  server.use( logFactory );
  server.use( require( "./routes" )( app ));
  
  server.listen( port, () => {
    log.info( `Listening on port ${ port }` );
  } );

  return server;
};