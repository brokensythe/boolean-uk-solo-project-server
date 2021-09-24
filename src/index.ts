import { config } from "dotenv"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import http from "http"
import { Server, Socket } from "socket.io"
import gameRouter from "./resources/Games/routes"

config()

const app = express()

/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */

app.use("/games", gameRouter)
app.get("*", (req, res) => {
  res.json({ ok: true })
})

/* WEBSOCKET INITIALIZATION */

const httpServer = http.createServer(app)
const options = { 
    
 }
const io = new Server(httpServer, options)

io.on("connection", (socket : Socket) => {
  console.log(`I am a web socket`)
})


/* START SERVER */

const port = process.env.PORT || 3030

httpServer.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
})

