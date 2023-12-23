import { Router } from "express";
import { userCrontrol } from "../service/userControl.js";

export const logInRouter = Router()

const uc = userCrontrol

logInRouter.get("/", async (req, res)=>{

    res.render("logIn",{
        title:"Inicio"
    })
})

logInRouter.post("/", async (req, res)=>{
    const date = req.body
    try {
        const login = await uc.logIn(date)
        if(login){
            req.session['user'] = date.username
            res.status(303).redirect("/Aeroenvios/ControlPanel")  
        }  
    } catch (error) {
        
        res.status(401).redirect("/Aeroenvios/LogIn")
    }
})