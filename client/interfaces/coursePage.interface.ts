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
    subTaskTime: number;
}
