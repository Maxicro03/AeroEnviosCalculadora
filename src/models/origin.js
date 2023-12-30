import mongoose from "mongoose"

const OriginSchema = new mongoose.Schema({
    _id: {type:String, required: true},
    origin: {type:String, required: true},
    value: {type: Number, required: true}
}, {
    versionKey: false,
    strict: "throw"
})

export const Origin = mongoose.model("origin", OriginSchema)