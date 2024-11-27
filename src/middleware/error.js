const errorMiddleware = (err, req, res, next) => {
  console.error("Error middleware triggered:", err);

  const customError = {
    message: "Something went wrong",
    status: 500,
  };

  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((value) => value.message)
      .join(", ");
    customError.message = message;
    customError.status = 400;
  }

  if (err.name === "CastError") {
    customError.message = `No match found for ${err.value}`;
    customError.status = 404;
  }

  if (err.code && err.code === 11000) {
    const field = Object.keys(err.keyValue).join(", ");
    customError.message = ` ${field} already exists`;
    customError.status = 400;
  }

  res.status(customError.status).json({
    message: customError.message,
  });
};

module.exports = errorMiddleware;
