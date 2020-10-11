"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseMiddlewares = void 0;
var morgan_1 = __importDefault(require("morgan"));
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var compression = require('compression');
exports.baseMiddlewares = function (app) {
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express_1.default.json()); // for parsing application/json
    app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use(morgan_1.default('dev'));
    app.use(compression());
    app.use(helmet_1.default());
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        next();
    });
};
//# sourceMappingURL=base.js.map