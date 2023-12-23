import { Categorys } from "../models/categorys.js";
import { randomUUID } from "crypto";

export class CategorysManager {
    
    async getCategorys(){
        const categorys = await Categorys.find()

        const sortedCategorys = categorys.sort((a, b) => {
            const categoryA = a.category.toLowerCase();
            const categoryB = b.category.toLowerCase();
    
            if (categoryA < categoryB) {
                return -1;
            }
            if (categoryA > categoryB) {
                return 1;
            }
            return 0;
        });

        return sortedCategorys
    }

    async getCategorysCalculator(){
        const categorys = await Categorys.find().lean()

        const sortedCategorys = categorys.sort((a, b) => {
            const categoryA = a.category.toLowerCase();
            const categoryB = b.category.toLowerCase();
    
            if (categoryA < categoryB) {
                return -1;
            }
            if (categoryA > categoryB) {
                return 1;
            }
            return 0;
        });

        return sortedCategorys
    }
    
    async addCategory(dates){
        const _id = randomUUID()
        dates._id = _id
        const porcentageFloat = parseFloat(dates.porcentage)
        dates.porcentage = porcentageFloat
        return await Categorys.create(dates)
    }

    async updatePorcentage(date) {

        const update = {
            $set: {
                porcentage: parseFloat(date.porcentage)
            }
        }

        const search = await Categorys.findByIdAndUpdate(date.category, update, { new: true }).lean()
    
        if (!search) {
            throw new Error("ID no encontrado")
        }
    
        return search;
    }

    async deleteCategory(date){
        const deleteCategory = await Categorys.findByIdAndDelete(date.category)

        if (!deleteCategory) {
            throw new Error("ID no encontrado")
        }
    
        return deleteCategory
    }
} 