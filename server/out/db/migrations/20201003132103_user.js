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
var defaults_1 = require("../../constants/defaults");
var tableNames_1 = __importDefault(require("../../constants/tableNames"));
var tableUtils_1 = require("../lib/table functions/tableUtils");
function up(knex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, knex.schema.createTable(tableNames_1.default.users, function (table) {
                        table.increments('id');
                        table.string("full_name", 256).notNullable();
                        table.string('email', 254).notNullable().notNullable();
                        table.string('password', 255).notNullable();
                        table.string('recovery_email', 254);
                        table.string('description', 1000);
                        // TODO: shecvale socials da piradi infos defaults
                        // TODO: shecvale categories
                        table.timestamp('last_login', { precision: 3 });
                        table.string('restore_token', 255);
                        table.string('token_expiration', 255);
                        table.string('image_url', 2048);
                        table.json('notifications');
                        table.json('paynment_info');
                        table.integer('student_amount').defaultTo(defaults_1.user.student_amount);
                        table.integer('review_amount', 255).defaultTo(defaults_1.user.review_amount);
                        table.integer('total_minutes_of_courses').defaultTo(defaults_1.user.total_minutes_of_courses);
                        table.json('detailed_rattings').defaultTo(JSON.stringify(defaults_1.user.rating_starts));
                        table.integer('ratting');
                        table.boolean('verified').defaultTo(defaults_1.user.verified);
                        table.boolean('isInstructor').defaultTo(defaults_1.user.isInstructor);
                        table.integer('subscriber_count').defaultTo(defaults_1.user.subscriber_count);
                        table.boolean('show_details_public').defaultTo(defaults_1.user.show_details_public);
                        table.json('personal_detales').defaultTo(JSON.stringify(defaults_1.user.socials));
                        table.json('socials');
                        table.json('purchased_courses_Receipts');
                        table.integer('Ulearn_coins').defaultTo(defaults_1.user.Ulearn_coins);
                        table.json('last_searched').defaultTo(defaults_1.user.last_searched);
                        table.string("affiliate_link", 255);
                        table.json("viewed_courses_ids").defaultTo(defaults_1.user.viewed_courses_ids);
                        tableUtils_1.references(table, tableNames_1.default.rating_titles);
                        tableUtils_1.references(table, tableNames_1.default.main_categories, true, "favorite_main_category");
                        table.json("favorite_sub_category_ids");
                        tableUtils_1.references(table, tableNames_1.default.main_categories, true, "generated_categories");
                        table.json("generated_sub_category_ids");
                        table.json('liked_courses_ids');
                        tableUtils_1.references(table, tableNames_1.default.user_types, true, 'user_type');
                        tableUtils_1.addTimestamps(table);
                    })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, knex.schema.createTable(tableNames_1.default.subscriptions, function (table) {
                            table.increments('id');
                            tableUtils_1.references(table, tableNames_1.default.users, true, "user");
                            tableUtils_1.references(table, tableNames_1.default.users, true, "instructor");
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        tableNames_1.default.subscriptions,
                        tableNames_1.default.made_reports,
                        tableNames_1.default.reports,
                        tableNames_1.default.users,
                    ].map(function (tableName) { return knex.schema.dropTableIfExists(tableName); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.down = down;
//# sourceMappingURL=20201003132103_user.js.map