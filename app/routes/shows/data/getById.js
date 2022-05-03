const axios = require( "axios" );

module.exports = ( { config } ) => async id => {
  const url = `https://api.themoviedb.org/3/tv/${ id }?api_key=${ config.API_KEY }`;
  
  try {
    const response = await axios.get( url );
    return response.data;
  } catch ( err ) {
    console.error( err );
  }
};
