import * as Knex from "knex";
import orderedTableNames from "../../constants/orderedTableNames";
import tableNames from "../../constants/tableNames";

export async function seed(knex: Knex): Promise<void> {
    await Promise.all(orderedTableNames.map((name) => knex(name).del()));



    // Inserts seed entries
    let userTypes = await knex(tableNames.user_types).insert([
        { id: 1, name: "admin" },
        { id: 2, name: "moderator" },
        { id: 3, name: "user" },
    ]).returning('*');

    let ratting_titles = await knex(tableNames.rating_titles).insert([
        { id: 1, name: "Bronze", badge_image_url: "https://www.inelobooster.com/wp-content/uploads/2017/12/Bronze_Rank_of_League_of_Legends.png" },
        { id: 2, name: "Silver", badge_image_url: "https://www.inelobooster.com/wp-content/uploads/2017/12/Silver_Rank_of_League_of_Legends.png" },
        { id: 3, name: "Gold", badge_image_url: "https://www.inelobooster.com/wp-content/uploads/2017/12/Gold_Rank_of_League_of_Legends.png" },
        { id: 4, name: "Platinum", badge_image_url: "https://www.inelobooster.com/wp-content/uploads/2017/12/Platinum_Rank_of_League_of_Legends.png" },
    ]).returning('*');

    let types_of_reports = await knex(tableNames.types_of_reports).insert([
        { id: 1, name: "კურსის შეუსაბამო შინაარსი" },
        { id: 2, name: "შეუსაბამო ქცევა" },
        { id: 3, name: "ულეარის პოლისის დარღვევა" },
        { id: 4, name: "სპამი" },
        { id: 5, name: "სხვა" },
    ]).returning('*');


    // console.log({ userTypes }, { ratting_titles }, { types_of_reports })

};
