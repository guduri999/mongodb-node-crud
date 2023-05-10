import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        requiredL: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

export default userSchema;