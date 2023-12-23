import { Router } from "express";
import { categorysManager } from "../service/categorysControl.js";
import { onlyLoguedWeb } from "../middlewares/sessions.js";

const cm = categorysManager

export const panelRouter = Router()

panelRouter.get("/", onlyLoguedWeb ,async (req, res)=>{
    const categorys = JSON.stringify(await cm.getCategorys())

    res.render("controlPanel",{
        title:"Inicio",
        categorys
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

    await cm.addCategory(date)

    res.status(204).send("Envio exitoso")
})

panelRouter.put("/", async (req, res)=>{
    const date = req.body

    await cm.updatePorcentage(date)

    res.status(204).send("Envio exitoso")
})

panelRouter.delete("/", async (req, res)=>{
    const date = req.body

    await cm.deleteCategory(date)

    res.status(204).send("Envio exitoso")
})


