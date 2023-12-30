import { Origin } from "../models/origin.js";
import { randomUUID } from "crypto";

export class OriginsManager {

    async getOrigins(){
        const origin = await Origin.find()

        const sortedOrigin = origin.sort((a, b) => {
            const originA = a.origin.toLowerCase();
            const originB = b.origin.toLowerCase();
    
            if (originA < originB) {
                return -1;
            }
            if (originA > originB) {
                return 1;
            }
            return 0;
        });

        return sortedOrigin
    }

    async getOriginsCalculator(){
        const origin = await Origin.find().lean()

        const sortedOrigin = origin.sort((a, b) => {
            const originA = a.origin.toLowerCase();
            const originB = b.origin.toLowerCase();
    
            if (originA < originB) {
                return -1;
            }
            if (originA > originB) {
                return 1;
            }
            return 0;
        });

        return sortedOrigin
    }

    async addOrigin(dates){
        const _id = randomUUID()
        dates._id = _id
        const valueFloat = parseFloat(dates.value)
        dates.value = valueFloat
        return await Origin.create(dates)
    }

    async updateValues(date) {

        const update = {
            $set: {
                value: parseFloat(date.value)
            }
        }

        const search = await Origin.findByIdAndUpdate(date.origin, update, { new: true }).lean()
    
        if (!search) {
            throw new Error("ID no encontrado")
        }
    
        return search
    }

    async deleteOrigin(date){
        console.log(date)
        const deleteCategory = await Origin.findByIdAndDelete(date.origin)

        if (!deleteCategory) {
            throw new Error("ID no encontrado")
        }
    
        return deleteCategory
    }
}