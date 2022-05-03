const appFactory = require( './app' );

// NOTE: the API_KEY in this config should be moved 
// to an environment variable for security purposes
const config = require( './config.json' );

module.exports = appFactory( config );