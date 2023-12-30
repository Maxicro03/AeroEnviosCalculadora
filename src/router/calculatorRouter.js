import { Router } from "express";
import { categorysManager } from "../service/categorysControl.js";
import { originManager } from "../service/originControl.js";

export const calculatorRouter = Router()

const cm = categorysManager
const om = originManager

calculatorRouter.get("/", async (req, res)=>{

    const categorys = await cm.getCategorysCalculator()
    const origins = await om.getOriginsCalculator()

    res.render("calculate",{
        title:"Inicio",
        categorys,
        origins
    })
})