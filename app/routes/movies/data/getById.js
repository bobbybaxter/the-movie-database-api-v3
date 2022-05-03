const axios = require( "axios" );

module.exports = ( { config } ) => async id => {
  const url = `https://api.themoviedb.org/3/movie/${ id }?api_key=${ config.API_KEY }`;
  
  try {
    const response = await axios.get( url );
    return response.data;
  } catch ( { response } ) {
    const { status_message } = response.data;
    return new Error( status_message, { cause: response } );
  }
};
