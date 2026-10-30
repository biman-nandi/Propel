import mongoose, { Schema } from "mongoose";
import { AvailableUserRoles, UserRoleEnum } from "../utils/constants.js";

const projectMemberSchema = new Schema(
  {
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    role: {
      type: String,
      enum: AvailableUserRoles,
      default: UserRoleEnum.MEMBER,
    },
  },
  { timestamps: true },
);

const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);

export { ProjectMember };
