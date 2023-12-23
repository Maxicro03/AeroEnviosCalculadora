import { User } from "../models/user.js";
import { hashedComprobation } from "../utils/cryptography.js";

export class UserManager {
    
    async logIn(data){
        const {username, password} = data
        const search = await User.findOne({username}).lean()
        if(search){
            const comprobation = hashedComprobation(password, search.password)
            if(comprobation){
                return true 
            } else {
                throw new Error("No coninciden los datos")
            }
        }
    }

}