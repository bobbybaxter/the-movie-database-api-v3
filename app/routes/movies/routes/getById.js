const transformMovie = require( "../../../utils/transformMovie" );

module.exports = ( { data } ) => {
  return async ( req, res, next ) => {
    const id = parseInt( req.params.id );

    if ( !id ) {
      return res.send( {} );
    }

    const results = await data.getById( id );

    if ( results instanceof Error ) {
      return next( results );
    }

    const MediaObject = transformMovie( results );

    return res.send( MediaObject );
  };
};