const transformShow = require( "../../../utils/transformShow" );

module.exports = ( { data } ) => {
  return async ( req, res, next ) => {
    let results;
    const { name } = req.query;

    if ( !name ) {
      return res.send( [] );
    }

    ( { results } = await data.getByName( name ));

    if ( results instanceof Error ) {
      return next( results );
    }

    if ( results.length > 10 ) {
      results = results.slice( 0, 10 );
    }

    const MediaObject = results.map( movie => transformShow( movie ));

    return res.send( MediaObject );
  };
};