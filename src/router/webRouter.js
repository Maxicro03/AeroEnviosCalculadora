import { Router } from "express";
import { calculatorRouter } from "./calculatorRouter.js";
import { logInRouter } from "./logInRouter.js";
import { panelRouter } from "./panelRouter.js";

export const webRouter = Router()

webRouter.use("/calculator", calculatorRouter)
webRouter.use("/LogIn", logInRouter)
webRouter.use("/ControlPanel", panelRouter)