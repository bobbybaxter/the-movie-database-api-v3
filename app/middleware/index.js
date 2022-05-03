module.exports = app => {
  return {
    errorHandler: require( "../middleware/errorHandler" )( app )
  };
};