// Generic error handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  
  console.error(err.stack);

  res.status(statusCode).json({
    status: 'error',
    statusCode: statusCode,
    message: err.message || 'Something went wrong on the server',
  });
};

export default errorHandler;
