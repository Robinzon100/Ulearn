"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var objection_1 = require("objection");
var knexfile_1 = __importDefault(require("./../knexfile"));
var connection = knex_1.default(knexfile_1.default.development);
objection_1.Model.knex(connection);
exports.default = connection;
//# sourceMappingURL=db.js.map