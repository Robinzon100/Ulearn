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
exports.seed = void 0;
var orderedTableNames_1 = __importDefault(require("../../constants/orderedTableNames"));
var tableNames_1 = __importDefault(require("../../constants/tableNames"));
function seed(knex) {
    return __awaiter(this, void 0, void 0, function () {
        var main_categories, sub_categories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all([
                        orderedTableNames_1.default.map(function (tableName) { return knex(tableName).del(); })
                    ])
                    // TODO: shemoiyvane samzareulo da ofisis produqtebi momavalshi
                ];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, knex(tableNames_1.default.main_categories).insert([
                            { id: 1, name: "დეველოპმენტი" },
                            { id: 2, name: "დიზაინი" },
                            { id: 3, name: "IT ტექნოლოგია" },
                            { id: 4, name: "ფოტოგრაფია" },
                            { id: 5, name: "ფინანსები და ბუღალტერია" },
                            { id: 6, name: "ბიზნესი" },
                            { id: 7, name: "მარკეტინგი" },
                            { id: 8, name: "მუსიკა" },
                            { id: 9, name: "ცევკვა" },
                            { id: 10, name: "ჯამრთელობა და ფიტნესი" },
                        ]).returning('*')];
                case 2:
                    main_categories = _a.sent();
                    return [4 /*yield*/, knex(tableNames_1.default.sub_categories).insert([
                            //! დეველოპმენტი
                            { id: 1, name: "ვებ-დეველომენტი", main_category_id: 1 },
                            { id: 2, name: "დატა მეცნიერება", main_category_id: 1 },
                            { id: 3, name: "მობილურ აპები", main_category_id: 1 },
                            { id: 4, name: "პროგრამირების ენები", main_category_id: 1 },
                            { id: 5, name: "თამაშების დეველპმენტი", main_category_id: 1 },
                            { id: 6, name: "დატაბაზები", main_category_id: 1 },
                            { id: 7, name: "wordpress დეველოპმენტი", main_category_id: 1 },
                            { id: 7, name: "ონლაინ მაღაზია", main_category_id: 1 },
                            //! დიზაინი
                            { id: 8, name: "ვებ-დიზაინი", main_category_id: 2 },
                            { id: 9, name: "გრაფიკული დიზაინი", main_category_id: 2 },
                            { id: 10, name: "დიზაინის პროგრამები", main_category_id: 2 },
                            { id: 11, name: "UX დიზაინი", main_category_id: 2 },
                            { id: 12, name: "3D და ანიმაციები", main_category_id: 2 },
                            { id: 13, name: "მოდა", main_category_id: 2 },
                            { id: 14, name: "არქიტექტურული დიზაინი", main_category_id: 2 },
                            { id: 15, name: "ინტერიერის დიზაინი", main_category_id: 2 },
                            //! IT ტექნოლოგია
                            { id: 16, name: "IT სერთიფიკატები", main_category_id: 3 },
                            { id: 17, name: "ქსელი და უსაფრთხოება", main_category_id: 3 },
                            { id: 18, name: "ოპერატიული სისტემები", main_category_id: 3 },
                            { id: 19, name: "აპარატურა (hardware)", main_category_id: 3 },
                            //! ფოტოგრაფია
                            { id: 20, name: "ციფრული ფოტოგრაფია", main_category_id: 4 },
                            { id: 21, name: "ფოტოგრაფიის პროგრამები", main_category_id: 4 },
                            { id: 22, name: "ფოტოგრაფიის ფუნდამენტები", main_category_id: 4 },
                            { id: 23, name: "კომერციული ფოტოგრაფია", main_category_id: 4 },
                            { id: 24, name: "პორტრეტები", main_category_id: 4 },
                            { id: 25, name: "ვიდეო დიზაინი", main_category_id: 4 },
                            //! ფინანსები და ბუღალტერია
                            { id: 26, name: "აღრიცხვები", main_category_id: 5 },
                            { id: 27, name: "შესაბამისობა", main_category_id: 5 },
                            { id: 28, name: "კრიპტოვალუტა და ბლოკჩეინი", main_category_id: 5 },
                            { id: 29, name: "ეკონომიკა", main_category_id: 5 },
                            { id: 30, name: "ფინანსები", main_category_id: 5 },
                            { id: 31, name: "ფინანსური სერტიფიკატები და საგამოცდო მომზადება", main_category_id: 5 },
                            { id: 32, name: "ფინანსური მოდელირება და ანალიზი", main_category_id: 5 },
                            { id: 33, name: "ინვესტიცია და ვაჭრობა", main_category_id: 5 },
                            { id: 34, name: "ფულის მენეჯმენტის პროგრამები", main_category_id: 5 },
                            { id: 35, name: "გადასახადები", main_category_id: 5 },
                            //! ბიზნესი
                            { id: 36, name: "ფინანსები", main_category_id: 6 },
                            { id: 37, name: "მეწარმეობა", main_category_id: 6 },
                            { id: 38, name: "კომუნიკაციები", main_category_id: 6 },
                            { id: 39, name: "გაყიდვები", main_category_id: 6 },
                            { id: 40, name: "სტრატეგია", main_category_id: 6 },
                            { id: 41, name: "ოპერაციები", main_category_id: 6 },
                            { id: 42, name: "პროექტის მენეჯმენტი", main_category_id: 6 },
                            { id: 43, name: "ბისნესის კანონები", main_category_id: 6 },
                            { id: 44, name: "მონაცემები და ანალიტიკა", main_category_id: 6 },
                            { id: 45, name: "საშინაო ბიზნესი", main_category_id: 6 },
                            { id: 46, name: "ადამიანური რესურსები", main_category_id: 6 },
                            { id: 47, name: "ინდუსტრია", main_category_id: 6 },
                            { id: 48, name: "მედია", main_category_id: 6 },
                            { id: 49, name: "უძრავი ქონება", main_category_id: 6 },
                            //! მარკეტინგი
                            { id: 50, name: "ციფრული მარკეტინგი", main_category_id: 7 },
                            { id: 51, name: "საძიებო სისტემის ოპტიმიზაცია (SEO)", main_category_id: 7 },
                            { id: 53, name: "სოციალური მედიას მარკეტინგი", main_category_id: 7 },
                            { id: 54, name: "ბრენდირება", main_category_id: 7 },
                            { id: 55, name: "მარკეტინგის ფუნდამენტები", main_category_id: 7 },
                            { id: 56, name: "ანალიტიკა და ავტომატიზაცია", main_category_id: 7 },
                            { id: 57, name: "საზოგადოებასთან ურთიერთობები", main_category_id: 7 },
                            { id: 58, name: "რეკლამები", main_category_id: 7 },
                            { id: 59, name: "ვიდეო და მობაილ მარკეტინგი", main_category_id: 7 },
                            { id: 60, name: "შვილობილი მარკეტინგი (affiliate marketing)", main_category_id: 7 },
                            { id: 61, name: "პროდუქტის მარკეტინგი", main_category_id: 7 },
                            //! მუსიკა
                            { id: 62, name: "მუსიკის ფუნდამენტები", main_category_id: 8 },
                            { id: 63, name: "ინსტრუმენტები", main_category_id: 8 },
                            { id: 64, name: "მუსიკის პროგრამები", main_category_id: 8 },
                            { id: 65, name: "DJ ფუნდამენტები", main_category_id: 8 },
                            { id: 66, name: "ვოკალები", main_category_id: 8 },
                            { id: 67, name: "მუსიკის ტექნიკები", main_category_id: 8 },
                            //! ცეკვა
                            { id: 68, name: "ქართული", main_category_id: 9 },
                            { id: 69, name: "უცხოური", main_category_id: 9 },
                            //! ჯამრთელობა და ფიტნესი
                            { id: 70, name: "ფიტნესი", main_category_id: 10 },
                            { id: 71, name: "ზოგადი ჯამრთელობა", main_category_id: 10 },
                            { id: 72, name: "სპორტი", main_category_id: 10 },
                            { id: 73, name: "სწორი კვება", main_category_id: 10 },
                            { id: 74, name: "იოგა", main_category_id: 10 },
                            { id: 75, name: "ფსიქიკური ჯანმრთელობის", main_category_id: 10 },
                            { id: 76, name: "თავდაცვა", main_category_id: 10 },
                            { id: 77, name: "უსაფრთხოება და პირველადი დახმარება", main_category_id: 10 },
                            { id: 78, name: "მედიტაცია", main_category_id: 10 },
                        ]).returning('*')];
                case 3:
                    sub_categories = _a.sent();
                    console.log({ main_categories: main_categories }, { sub_categories: sub_categories });
                    return [2 /*return*/];
            }
        });
    });
}
exports.seed = seed;
;
//# sourceMappingURL=categories.js.map