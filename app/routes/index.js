const { Router: routerFactory } = require( "express" );

module.exports = app => {
  const { middleware } = app;
  const router = routerFactory();

  // add pre-resource-routing middleware here
  
  // mount resources here
  router
    .use( "/movies", require( "./movies" )( app ))
    .use( "/shows", require( "./shows" )( app ));
  
  // add post-resource-routing middleware here
  router.use( middleware.errorHandler );
    
  return router;
};