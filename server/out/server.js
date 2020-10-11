"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var base_1 = require("./middleware/server/base");
var errorHandlers_1 = require("./middleware/server/errorHandlers");
var app = express_1.default();
//! ─── CONFIGS ──────────────────────────────────────────────────────────────────────
require('dotenv').config();
// !─── MY MODULES ─────────────────────────────────────────────────────────────────
// const auth = require("./middleware/auth")
//! ─── CONST ──────────────────────────────────────────────────────────────────────
var PORT = process.env.PORT || 5000;
//! ─── BASE MIDDLEWARES ────────────────────────────────────────────────────────────
base_1.baseMiddlewares(app);
//!  ─── ROUTE IMPORTS ──────────────────────────────────────────────────────────────────────
app.post('/api', function (req, res, next) {
    console.log(req.body);
    res.json(req.body);
});
app.use(errorHandlers_1.notFound);
app.use(errorHandlers_1.errorHandler);
app.listen(PORT, function () {
    console.log("running http://localhost:" + PORT);
});
//# sourceMappingURL=server.js.map