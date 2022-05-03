module.exports = app => ( err, req, res, next ) => {
  const error = err.cause;
  error.status = error.status || 500;
  error.statusText = error.statusText || 'error';

  res.status( error.status ).send( error.statusText );
};