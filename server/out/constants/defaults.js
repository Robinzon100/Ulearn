"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comment = exports.user = exports.course = void 0;
var course = {
    detaled_rating: { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0, "0": 0 },
    student_amount: 0
};
exports.course = course;
var user = {
    Ulearn_coins: 0,
    verified: false,
    isInstructor: false,
    show_details_public: false,
    socials: {
        "facebook": "",
        "instagram": "",
        "twitter": "",
        "website": "",
        "youtube": ""
    },
    rating_starts: { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0, "0": 0 },
    student_amount: 0,
    review_amount: 0,
    total_minutes_of_courses: 0,
    subscriber_count: 0,
    viewed_courses_ids: [],
    last_searched: []
};
exports.user = user;
var comment = {
    likes: 0,
    dislikes: 0,
    liked_by_instructor: false,
};
exports.comment = comment;
//# sourceMappingURL=defaults.js.map