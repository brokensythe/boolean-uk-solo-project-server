import { Router } from "express"
import { createGame, updateMoves, getOneGame } from "./controller"

const gameRouter = Router()

gameRouter.get("/:id", getOneGame)
gameRouter.post("/", createGame)
gameRouter.patch("/:id", updateMoves)

export default gameRouter