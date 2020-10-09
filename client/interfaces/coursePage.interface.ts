//! === TYPES
import { stars } from "../type/course.type";



//!  about course 
export interface AboutCourse {
    title:string,
    peopleWatched:number
}



//! video content
interface subTitle {
    id: number,
    text: string,
    videoUrl: string,
    amountOfMinutes: number
}


export interface videoList {
    id: number;
    title: string;
    courseChapterTime: number;
    subTitles: subTitle[];
    // subTaskTime: number;
}







//====================================================

  //! description tab
  export interface Description_type {
    html: string;
  }



  //! question tab
  interface Answer {
    userName: string,
    imageUrl: string,
    datePosted: string,
    text:string,
  }

  interface Question {
    userName: string,
    imageUrl: string,
    datePosted: string,
    text:string,
    amountOfAnswer: number,
    answers: Answer[]
  }

  export interface QuestionAnswer_type {
    questionAnswers: Question[];
  }


  //! resources tab
  interface Resource {
    title: string,
    filePath: string
  }

  export interface Resources_type {
    html: string;
    resource: Resource
  }


 //! resources tab
  interface Rating{
    userName: string,
    datePosted: string,  
    amountOfStars: stars,
    comment: string,
    dislike: number,
    like: number,
    isLikedByInstructor: boolean
    imageUrl:string
  }

  export interface Estimates_type {
    ratings: Rating[];
  }