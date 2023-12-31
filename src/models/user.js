import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    _id: {type:String, required: true},
    username: {type:String, required: true},
    password: {type: String, required: true}
}, {
    versionKey: false,
    strict: "throw"
})

export const User = mongoose.model("User", UserSchema)