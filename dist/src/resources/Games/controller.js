"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMoves = exports.createGame = exports.getOneGame = void 0;
const database_1 = __importDefault(require("../../../utils/database"));
const boardInfo_1 = __importDefault(require("../../../utils/boardInfo"));
function getOneGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number(req.params.id);
        try {
            const currentGame = yield database_1.default.games.findUnique({
                where: { id },
                include: {
                    Boards: {
                        orderBy: {
                            timestamp: 'desc'
                        }
                    }
                }
            });
            res.json({
                data: currentGame
            });
        }
        catch (error) {
            res.json({ msg: error });
        }
    });
}
exports.getOneGame = getOneGame;
function createGame(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newGame = yield database_1.default.games.create({
                data: {
                    moves: [],
                    Boards: {
                        create: [
                            {
                                board_info: boardInfo_1.default
                            }
                        ]
                    }
                }
            });
            res.json({
                data: newGame
            });
        }
        catch (error) {
            res.json({ msg: error });
        }
    });
}
exports.createGame = createGame;
function updateMoves(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const moves = req.body.moves;
        try {
            const currentGame = yield database_1.default.games.update({
                where: { id },
                data: {
                    moves: moves
                }
            });
            res.json({
                data: currentGame
            });
        }
        catch (error) {
            res.json({ msg: error });
        }
    });
}
exports.updateMoves = updateMoves;
