const { Router: routerFactory } = require( "express" );

module.exports = app => {
  const data = require( './data' )( app );

  return routerFactory()
    .get( "/", require( "./routes/getByTitle" )( { ...app, data } ));
};