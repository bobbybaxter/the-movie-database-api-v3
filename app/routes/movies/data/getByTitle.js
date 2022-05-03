const axios = require( "axios" );

module.exports = ( { config } ) => async title => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${ config.API_KEY }&query=${ title }`;
  
  try {
    const response = await axios.get( url );
    return response.data;
  } catch ( err ) {
    console.error( err );
  }
};
