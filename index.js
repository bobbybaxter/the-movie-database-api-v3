const serverFactory = require( './server' );

const app = {};

app.server = serverFactory( app );

module.exports = app;