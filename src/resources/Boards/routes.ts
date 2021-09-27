import { Router } from "express"
import { addBoard } from "./controller"

const boardRouter = Router()

boardRouter.post("/", addBoard)

export default boardRouter