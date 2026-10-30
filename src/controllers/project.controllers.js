import { AsyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/api-error.js";
import { ApiResponse } from "../utils/api-response.js";
import { User } from "../models/user.model.js";
import { Project } from "../models/project.models.js";

const getProjects = AsyncHandler(async (req, res) => {});

const getProjectById = AsyncHandler(async (req, res) => {});

const createProject = AsyncHandler(async (req, res) => {});

const deleteProject = AsyncHandler(async (req, res) => {});

const updateProject = AsyncHandler(async (req, res) => {});

// const getProjectById = AsyncHandler(async(req, res) => {

// })

// const getProjectById = AsyncHandler(async(req, res) => {

// })

// const getProjectById = AsyncHandler(async(req, res) => {

// })

// const getProjectById = AsyncHandler(async(req, res) => {

// })

export {
  getProjects,
  getProjectById,
  createProject,
  deleteProject,
  updateProject,
};
