const transformShow = require( "../../../utils/transformShow" );

module.exports = ( { data } ) => {
  return async ( req, res, next ) => {
    const id = parseInt( req.params.id );

    if ( !id ) {
      return res.send( {} );
    }

    try {
      const results = await data.getById( id );

      if ( results instanceof Error ) {
        return next( results );
      }

      const MediaObject = transformShow( results );

      return res.send( MediaObject );
    } catch ( err ) {
      return next( err );
    }
  };
};