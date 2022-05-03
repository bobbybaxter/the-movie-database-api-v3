const transformShow = require( "../../../utils/transformShow" );

module.exports = ( { data } ) => {
  return async ( req, res ) => {
    let results;
    const { query } = req.query;

    try {
      ( { results } = await data.getByTitle( query ));

      if ( results.length > 10 ) {
        results = results.slice( 0, 10 );
      }

      const MediaObject = results.map( movie => transformShow( movie ));

      return res.send( MediaObject );
    } catch ( err ) {
      console.error( err );
    }
  };
};