import { Router } from "express";
import { categorysManager } from "../service/categorysControl.js";
import { originManager } from "../service/originControl.js";
import { onlyLoguedWeb } from "../middlewares/sessions.js";

const cm = categorysManager
const om = originManager

export const panelRouter = Router()

panelRouter.get("/", onlyLoguedWeb ,async (req, res)=>{
    const categorys = JSON.stringify(await cm.getCategorys())
    const origins = JSON.stringify(await om.getOrigins())

    res.render("controlPanel",{
        title:"Inicio",
        categorys,
        origins
    })
})

panelRouter.post('/logout', (req, res) => {
    req.session.destroy(error => {
      if (error) {
        console.log(error)
      }
      res.redirect('/Aeroenvios/login')
    })
  })

panelRouter.post("/", async (req, res)=>{
    const date = req.body

    if(date.origin && date.value){
      await om.addOrigin(date)
      res.status(204).send("Envio exitoso")
    } else if(date.category && date.porcentage){
      await cm.addCategory(date)
      res.status(204).send("Envio exitoso")
    } else {
      res.status(500).send("Hubo un error inesperado")
    }
})

panelRouter.put("/", async (req, res)=>{
    const date = req.body

    if(date.origin && date.value){
      await om.updateValues(date)
      res.status(204).send("Envio exitoso")
    } else if(date.category && date.porcentage){
      await cm.updatePorcentage(date)
      res.status(204).send("Envio exitoso")
    } else {
      res.status(500).send("Hubo un error inesperado")
    }
})

panelRouter.delete("/", async (req, res)=>{
    const date = req.body
    
    if(date.origin){
      await om.deleteOrigin(date)
      res.status(204).send("Envio exitoso")
    } else if(date.category){
      await cm.deleteCategory(date)
      res.status(204).send("Envio exitoso")
    } else {
      res.status(500).send("Hubo un error inesperado")
    }
})


