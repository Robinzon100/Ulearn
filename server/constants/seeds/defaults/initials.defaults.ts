const userTypesDefaults = [
    { id: 1, name: "admin" },
    { id: 2, name: "moderator" },
    { id: 3, name: "user" },
]



const ratingTitlesDefaults = [
    { id: 1, name: "Bronze", badge_image_url: "https://www.inelobooster.com/wp-content/uploads/2017/12/Bronze_Rank_of_League_of_Legends.png" },
    { id: 2, name: "Silver", badge_image_url: "https://www.inelobooster.com/wp-content/uploads/2017/12/Silver_Rank_of_League_of_Legends.png" },
    { id: 3, name: "Gold", badge_image_url: "https://www.inelobooster.com/wp-content/uploads/2017/12/Gold_Rank_of_League_of_Legends.png" },
    { id: 4, name: "Platinum", badge_image_url: "https://www.inelobooster.com/wp-content/uploads/2017/12/Platinum_Rank_of_League_of_Legends.png" },
]


const typesOfReportsDefaults = [
    { id: 1, name: "კურსის შეუსაბამო შინაარსი" },
    { id: 2, name: "შეუსაბამო ქცევა" },
    { id: 3, name: "ულეარის პოლისის დარღვევა" },
    { id: 4, name: "სპამი" },
    { id: 5, name: "სხვა" },
]


export {
    userTypesDefaults,
    ratingTitlesDefaults,
    typesOfReportsDefaults
}