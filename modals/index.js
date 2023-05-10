import mongoose from "mongoose";

import userSchema from "../schema/user.schema.js";

const UsersModal = mongoose.model("Users", userSchema)

export default UsersModal;
