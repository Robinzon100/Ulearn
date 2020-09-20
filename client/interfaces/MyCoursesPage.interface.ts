import { stars } from "../type/course.type";




interface instructor {
    userName:string,
    numberOfCourses:number,
    numberOfStudents:number,
    amountOfStars: stars,
    amountOfVotes:number
    aboutInstructor:string,
    
}

export interface MyCoursePageContent {
    html:string,
    instructors:instructor[]
}

