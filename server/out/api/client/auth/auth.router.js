"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_controller_1 = require("./auth.controller");
var router = express_1.default.Router();
router.get('/register', auth_controller_1.registrationController);
exports.default = router;
//# sourceMappingURL=auth.router.js.map