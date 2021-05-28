import { Description_type, QuestionAnswer_type, Resources_type, Estimates_type, } from "../../../../../interfaces/coursePage.interface";

import CoursesJson from "../../../../../public/json/Courses.json";



export const fetchTabContent = (route: string): | Description_type | QuestionAnswer_type | Resources_type
    | Estimates_type => {
    switch (route) {
        case "/description":
            return CoursesJson.description;

        case "/questionAnswer":
            return CoursesJson.questionAnswers;

        case "/resources":
            return CoursesJson.Resources;

        case "/estimates":
            return CoursesJson.ratings;

        default:
            break;
    }
};