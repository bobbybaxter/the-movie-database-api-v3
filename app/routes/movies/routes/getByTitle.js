const transformMovie = require( "../../../utils/transformMovie" );

module.exports = ( { data } ) => {
  return async ( req, res ) => {
    let results;
    const { query } = req.query;

    try {
      ( { results } = await data.getByTitle( query ));

      if ( results.length > 10 ) {
        results = results.slice( 0, 10 );
      }

      const MediaObject = results.map( movie => transformMovie( movie ));

      return res.send( MediaObject );
    } catch ( err ) {
      console.error( err );
    }
  };
};