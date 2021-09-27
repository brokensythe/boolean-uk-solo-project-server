import { Request, Response } from "express";
import dbClient from "../../../utils/database"
import INITIAL_BOARD from "../../../utils/boardInfo"

export async function getOneGame(req: Request, res: Response) {
    const id = Number(req.params.id)

    try {
        const currentGame = await dbClient.games.findUnique({
            where: { id },
            include: {
                Boards: {
                    orderBy: {
                        timestamp: 'desc'
                    }
                }
            }
        })
        
        res.json({
            data: currentGame
        })
    } catch (error) {
        res.json({ msg: error })
    }
}

export async function createGame(req: Request, res: Response) {
    try {
        const newGame = await dbClient.games.create({
            data: {
                moves: [],
                Boards: {
                    create: [
                        {
                            board_info: INITIAL_BOARD
                        }
                    ]
                }
            }
        })
        res.json({
            data: newGame
        })
    } catch (error) {
        res.json({ msg: error })
    }
}

export async function updateMoves(req: Request, res: Response) {
    const id = Number(req.params.id)
    const moves = req.body.moves

    try {
        const currentGame = await dbClient.games.update({
            where: { id },
            data: {
                moves: moves
            }
        })
        res.json({
            data: currentGame
        })
    } catch (error) {
        res.json({ msg: error })
    }
}