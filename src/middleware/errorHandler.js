import { HttpStatus } from "../constant/constant.js";

const errorHandler = (error, req, res, next) => {
  let statusCode = "";

  let message = "";
  console.log(error);

  if (error.code === 11000) {
    statusCode = HttpStatus.CONFLICT;
    message = `Duplicate key error`;
  } else {
    message = error.message || "Internal server error";
    statusCode = error.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  }

  res.status(statusCode).json({
    sucess: false,
    ...(message && { message }),
  });
};

export default errorHandler;
