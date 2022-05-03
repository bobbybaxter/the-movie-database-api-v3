const { Router: routerFactory } = require( "express" );

module.exports = app => {
  const router = routerFactory();

  // add pre-resource-routing middleware here

  // mount resources here
  router
    .use( "/movies", require( "./movies" )( app ))
    .use( "/shows", require( "./shows" )( app ));

  return router;
};