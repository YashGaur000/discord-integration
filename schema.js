// import { SchemaTypes } from "mongoose";
// import mongoose from "../utils/db/connection.js";
// const Schema = mongoose.Schema;
// const questionSchema = new Schema({
//     "id":{type:SchemaTypes.String, required:true, unique:true},
//     "username":{type:SchemaTypes.String, required:true},
//     "discriminatot":{type:SchemaTypes.String, required:true},
//     "avatar":{type:SchemaTypes.String, required:true}
// });
// export const QuestionModel = mongoose.model('questions',questionSchema);

// import { SchemaTypes } from "mongoose";
import mongoose from "./connections.js";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  avatar: { type: String },
  discriminator: { type: String },
  public_flags: { type: Number },
  flags: { type: Number },
  banner: { type: String },
  accent_color: { type: Number },
  global_name: { type: String },
  avatar_decoration_data: { type: String },
  banner_color: { type: String },
  clan: { type: String },
  mfa_enabled: { type: Boolean },
  locale: { type: String },
  premium_type: { type: Number },
  email: { type: String },
  verified: { type: Boolean },
  accessToken: { type: String, required: true },
  refreshToken: { type: String },
  tokenType: { type: String },
  expiresIn: { type: Number },
  scope: { type: String },
});

export const UserModel = mongoose.model('User', userSchema);

