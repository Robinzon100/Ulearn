"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var clientRoutes = express_1.Router();
//! ─── CUSTOM MODULES ─────────────────────────────────────────────────────────────
//! ─── CONTOLLERS ─────────────────────────────────────────────────────────────────
var register_controller_1 = require("../../controllers/client/register.controller");
//! ─── REGISTER ─────────────────────────────────────────────────────────────────
clientRoutes
    .route("/register")
    .post(register_controller_1.postRegister);
exports.default = clientRoutes;
//# sourceMappingURL=client.routes.js.map