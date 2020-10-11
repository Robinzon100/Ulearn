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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
var tableNames_1 = __importDefault(require("../../constants/tableNames"));
var tableUtils_1 = require("../lib/table functions/tableUtils");
var defaults_1 = require("../../constants/defaults");
function up(knex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, knex.schema.createTable(tableNames_1.default.courses, function (table) {
                        table.increments();
                        table.string("name", 70).notNullable();
                        table.string("description", 70).notNullable();
                        table.string("detaled_description", 70).notNullable();
                        table.integer("difficulty", 4).unsigned().notNullable();
                        table.string("thumbnail_imageUrl", 254).notNullable();
                        table.string("intro_videoUrl", 254).notNullable();
                        table.float("duration");
                        table.json('what_will_you_learn').notNullable();
                        table.integer("student_amount").defaultTo(defaults_1.course.student_amount);
                        table.json('detaled_rating').notNullable().defaultTo(JSON.stringify(defaults_1.course.detaled_rating));
                        table.float('overall_rating');
                        table.json('course_content').notNullable();
                        table.json('units_sold').notNullable();
                        table.float('price');
                        table.float('ulearn_coin_price');
                        table.float('discount_price');
                        table.float('affiliation_price');
                        tableUtils_1.addTimestamps(table);
                        tableUtils_1.references(table, tableNames_1.default.main_categories, true, 'main_category');
                        tableUtils_1.references(table, tableNames_1.default.sub_categories, true, 'sub_category');
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        tableNames_1.default.questions,
                        tableNames_1.default.comments,
                        tableNames_1.default.courses
                    ].map(function (tableName) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, knex.schema.dropTableIfExists(tableName)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.down = down;
//# sourceMappingURL=20201004231527_course.js.map