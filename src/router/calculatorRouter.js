import { Router } from "express";
import { categorysManager } from "../service/categorysControl.js";

export const calculatorRouter = Router()

const cm = categorysManager

calculatorRouter.get("/", async (req, res)=>{

    const categorys = await cm.getCategorysCalculator()

    res.render("calculate",{
        title:"Inicio",
        categorys
    })
})