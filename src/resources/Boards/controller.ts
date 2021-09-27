import { Request, Response } from "express";
import dbClient from "../../../utils/database"


export async function addBoard(req: Request, res: Response) {
    const board = req.body.board_info
    const gameId = req.body.game_id

    try {
        const Board = await dbClient.boards.create({
            data: {
                board_info: board,
                game_id: gameId
            }
        })
        
        res.json({
            data: Board
        })
    } catch (error) {
        res.json({ msg: error })
    }
}