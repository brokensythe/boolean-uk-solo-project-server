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
exports.addBoard = void 0;
const database_1 = __importDefault(require("../../../utils/database"));
function addBoard(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const board = req.body.board_info;
        const gameId = req.body.game_id;
        try {
            const Board = yield database_1.default.boards.create({
                data: {
                    board_info: board,
                    game_id: gameId
                }
            });
            res.json({
                data: Board
            });
        }
        catch (error) {
            res.json({ msg: error });
        }
    });
}
exports.addBoard = addBoard;
