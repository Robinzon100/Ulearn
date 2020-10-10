import * as Knex from "knex";
import orderedTableNames from "../../constants/orderedTableNames";
import tableNames from "../../constants/tableNames";

export async function seed(knex: Knex): Promise<void> {

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


    let main_categories = await knex(tableNames.main_categories).insert([
        { id: 1, name: "დეველოპმენტი" },
        { id: 2, name: "დიზაინი" },
        { id: 3, name: "ფინანსები და ბუღალტერია" },
        { id: 4, name: "IT ტექნოლოგია" },
        { id: 5, name: "ფოტოგრაფია" },
        { id: 6, name: "ბიზნესი" },
        { id: 7, name: "მარკეტინგი" },
        { id: 8, name: "მუსიკა" },
        { id: 9, name: "ცევკვა" },
        { id: 10, name: "ჯამრთელობა და ფიტნესი" },
        { id: 11, name: "ცხოვრების სტილი" },
        { id: 12, name: "სამზარეულო" },
        { id: 13, name: "ოფისის პროდუქტიულობა" },
    ]).returning('*');

    
    let syb_categories = await knex(tableNames.sub_categories).insert([
        // დეველოპმენტი
        { id: 1, name: "full-stack დეველოპმენტი", main_category_id: 1}
        
    ]).returning('*');



    

    console.log({ userTypes }, { ratting_titles }, { types_of_reports }, { main_categories })



    await Promise.all(
        orderedTableNames.map(tableName => knex(tableName).del())
    )




};
