const express = require( 'express' );
const server = express();

module.exports = app => {
  const port = 3000; // NOTE: when config file is needed, move this there

  server.use( require( "./routes" )( app ));
  
  server.listen( port, () => {
    console.log( `Listening on port ${ port }` );
  } );

  return server;
};