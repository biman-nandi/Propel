import { AsyncHandler } from "../utils/async-handler.js";
import { ApiResponse } from "../utils/api-response.js";

const healthCheck = AsyncHandler(async (req, res, next) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is running" }));
});

export default healthCheck;
