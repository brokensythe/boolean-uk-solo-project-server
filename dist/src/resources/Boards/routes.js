"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const boardRouter = (0, express_1.Router)();
boardRouter.post("/", controller_1.addBoard);
exports.default = boardRouter;
