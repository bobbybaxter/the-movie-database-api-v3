const { Router: routerFactory } = require( "express" );

module.exports = app => {
  const data = require( './data' )( app );

  return routerFactory()
    .get( "/", require( "./routes/getByName" )( { ...app, data } ))
    .get( "/:id", require( "./routes/getById" )( { ...app, data } ))
  ;
};