import { v4 } from 'uuid';

let course = {
    detailed_rating: { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0 },
    student_amount: 0
}


let user = {
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

    notifications: [],

    rating_starts: { "5": 0, "4": 0, "3": 0, "2": 0, "1": 0, "0": 0 },

    student_amount: 0,
    review_amount: 0,
    total_minutes_of_courses: 0,
    subscriber_count: 0,
    viewed_courses_ids: [],
    last_searched: []
}


let comment = {
    likes: 0,
    dislikes: 0,
    liked_by_instructor: false,
}


let courseContent = {
    curriculum: [
        {
            id: 1,
            name: 'თავის სახელი',
            sub_videos: [
                {
                    id: 1,
                    name: 'ვიდეოს სახელწოდება',
                    duration: 15,
                    video_url: 'https://vimeo.com/431434644'
                }
            ]
        },
    ],
}

export {
    course,
    courseContent,
    user,
    comment
}