import { Router } from "express";
import healthCheck from "../controllers/healthcheck.controllers.js";

export const healthCheckRouter = Router();

healthCheckRouter.get("/", healthCheck);
