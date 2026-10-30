import { Router } from "express";
import { validator } from "../middlewares/validator.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  verifyEmail,
  resendEmailVerification,
  refreshAccessToken,
  forgotPasswordEmail,
  forgotPassword,
  changePassword,
} from "../controllers/auth.controller.js";
import {
  registerUserValidator,
  loginUserValidator,
  forgotPasswordEmailValidator,
  forgotPasswordValidator,
  passwordChangeValidator,
} from "../validators/index.js";

export const authRouter = Router();

// Insecure Routes
authRouter
  .route("/register")
  .post(registerUserValidator(), validator, registerUser);
authRouter.route("/login").post(loginUserValidator(), validator, loginUser);
authRouter.route("/verify-email/:verificationToken").get(verifyEmail);
authRouter.route("/refresh-token").post(refreshAccessToken);
authRouter
  .route("/forgot-password")
  .post(forgotPasswordEmailValidator(), validator, forgotPasswordEmail);
authRouter
  .route("/reset-password/:forgotPasswordToken")
  .post(forgotPasswordValidator(), validator, forgotPassword);

// Secure Routes
authRouter.route("/logout").post(verifyJWT, logoutUser);
authRouter.route("/current-user").get(verifyJWT, getCurrentUser);
authRouter
  .route("/resend-email-verification")
  .post(verifyJWT, resendEmailVerification);
authRouter
  .route("/change-password")
  .post(verifyJWT, passwordChangeValidator(), validator, changePassword);
