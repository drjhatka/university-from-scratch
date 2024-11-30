import { Schema } from "mongoose";
import { TUser } from "./user.interface";
import { UserRolesArray, UserStatusArray } from "./userEnums";

const userSchema = new Schema<TUser>({
    id: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        //default: config.default_password
        select: false
    },
    needsPasswordChange: {
        type: Boolean,
        default: true
    },
    passwordChangedAt: {
        type: Date,
    },
    role: {
        type: String,
        enum: UserRolesArray
    },
    status: {
        type: String,
        enum: UserStatusArray,
        default:'active'
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
)