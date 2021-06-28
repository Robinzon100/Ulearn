import { makeObservable, observable } from 'mobx';



interface ICourseInfo {
    title: string,
    description: string,
    detailed_description: string,
    what_will_you_learn: string[],
    main_category_id: string,
    sub_category_id: string,
    difficulty: string,
    image_url:string,
}

interface ISubVideos {
    id: number,
    name: string,
    duration: number,
    video_url: string,
}

interface ICurriculum {
    id: number,
    name: string,
    sub_videos: ISubVideos[],
}

interface IPriceAndSale {
    price:number,
    sale:number,
    coin:number
}


export class NewCourseStore {
    newCourseData: {
        curriculum: ICurriculum[],
        courseInfo: ICourseInfo,
        priceAndSale:IPriceAndSale
    }


    constructor() {
        makeObservable(this, {
            newCourseData: observable
        })
    }
}