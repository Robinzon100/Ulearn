import { stars } from "../type/course.type";




export interface MyCoursePageHtml {
    html:string
}

export interface Instructor {
    userName:string,
    numberOfCourses:number,
    numberOfStudents:number,
    amountOfStars: stars,
    aboutInstructor:string,
    
}