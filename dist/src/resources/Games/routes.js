"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const gameRouter = (0, express_1.Router)();
gameRouter.get("/:id", controller_1.getOneGame);
gameRouter.post("/", controller_1.createGame);
gameRouter.patch("/:id", controller_1.updateMoves);
exports.default = gameRouter;
