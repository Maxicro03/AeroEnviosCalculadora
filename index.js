import express from "express"
import mongoose from "mongoose"
import { engine } from "express-handlebars"
import { MDB_CONNECT, PORT } from "./src/service/config.js"
import { webRouter } from "./src/router/webRouter.js"
import { sessions } from "./src/middlewares/sessions.js"

await mongoose.connect(MDB_CONNECT)

const app = express()

app.use(sessions)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine("handlebars", engine())
app.set('views', './src/static/views')
app.set("view engine", "handlebars")
app.use("/static", express.static("./src/static"))
app.use("/views", express.static("./src/static/"))

app.use("/Aeroenvios", webRouter)

app.listen(PORT, ()=>{})