import { Router } from "express"
import { createGame } from "./controller"

const gameRouter = Router()

gameRouter.post("/", createGame)

export default gameRouter