"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tableNames_1 = __importDefault(require("./../../constants/tableNames"));
var db_1 = __importDefault(require("./../db"));
var objection_1 = require("objection");
var schema = require("./user.schema.json");
objection_1.Model.knex(db_1.default);
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User, "Users", {
        get: function () {
            return tableNames_1.default.users;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User, "jsonSchema", {
        get: function () {
            return schema;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}(objection_1.Model));
exports.default = User;
//# sourceMappingURL=user.model.js.map