const transformMovie = require( "../../../utils/transformMovie" );

module.exports = ( { data } ) => {
  return async ( req, res ) => {
    const id = parseInt( req.params.id );

    if ( !id ) {
      return res.send( {} );
    }

    try {
      const results = await data.getById( id );

      const MediaObject = transformMovie( results );

      return res.send( MediaObject );
    } catch ( err ) {
      console.error( err );
    }
  };
};