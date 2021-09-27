"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const routes_1 = __importDefault(require("./resources/Games/routes"));
const routes_2 = __importDefault(require("./resources/Boards/routes"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
/* SETUP MIDDLEWARE */
app.disable("x-powered-by");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev"));
/* SETUP ROUTES */
app.use("/games", routes_1.default);
app.use("/boards", routes_2.default);
app.get("*", (req, res) => {
    res.json({ ok: true });
});
/* WEBSOCKET INITIALIZATION */
const httpServer = http_1.default.createServer(app);
const options = {};
const io = new socket_io_1.Server(httpServer, options);
io.on("connection", (socket) => {
    console.log(`I am a web socket`);
});
/* START SERVER */
const port = process.env.PORT || 3030;
httpServer.listen(port, () => {
    console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
