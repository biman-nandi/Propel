import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

const validator = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const errorArray = [];
  errors.array().map((err) => {
    errorArray.push({
      [err.path]: err.msg,
    });
  });

  throw new ApiError(422, "Received data is not valid", errorArray);
};

export { validator };
