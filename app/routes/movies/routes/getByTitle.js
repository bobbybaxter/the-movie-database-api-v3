const transformMovie = require( "../../../utils/transformMovie" );

module.exports = ( { data } ) => {
  return async ( req, res ) => {
    let results;
    const { title } = req.query;

    if ( !title ) {
      return res.send( [] );
    }

    try {
      ( { results } = await data.getByTitle( title ));

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