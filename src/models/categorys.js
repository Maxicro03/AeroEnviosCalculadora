import mongoose from "mongoose"

const CategorysSchema = new mongoose.Schema({
    _id: {type:String, required: true},
    category: {type:String, required: true},
    porcentage: {type: Number, required: true}
}, {
    versionKey: false,
    strict: "throw"
})

export const Categorys = mongoose.model("categorys", CategorysSchema)