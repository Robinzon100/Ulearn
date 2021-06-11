
import { Calendar, Zap, Search, Star } from "react-feather";
import { useState, useEffect } from 'react';


import RangeSlider from 'components/lib/RangeSlider/RangeSlider';
import Select from 'components/lib/select/select';

import SelectJson from "../../../public/json/Select.json";

import { getFilteredCourses } from "actions/client/user/courses/getFilteredCourses";
import { getAllCategories } from "actions/client/categories.action";
// import { Categories } from '../../../interfaces/maincategory.interface';


type CourseSearchType = {
    price?: number;
    overall_rating?: number;
    duration?: number
    main_category_id?: any
    sub_category_id?: any
    difficulty?: any
};



let searchFilterObj = {}




const CoursesSearch = ({ result, userPrefferedCategoryIds }) => {
    const [courseSearch, setCourseSearch] = useState<CourseSearchType>({ price: 0, overall_rating: 0, duration: 0 });
    const [userSubCategories, setUserSubCategories] = useState([]);

    const handleSearchInputs = (value, field?: keyof (CourseSearchType)) => {
        setCourseSearch({ ...courseSearch, [field]: value })
        if (field == 'sub_category_id') {
            searchFilterObj['main_category_id'] = value.main_category_id
            searchFilterObj[field] = value.value
        } else {
            searchFilterObj[field] = value
        }
    }


    const getCurrentUserSubCategories = async () => {
        const { categories } = await getAllCategories()
        let userCategories = []

        userPrefferedCategoryIds.map(userCategory => {
            userCategories.push(
                categories.sub_categories.filter(category =>
                    category.main_category_id == userCategory.id))
        })
        setUserSubCategories([].concat.apply([], userCategories))
    }





    useEffect(() => {
        if (userPrefferedCategoryIds != 0) {
            getCurrentUserSubCategories()
        } else {
            getAllCategories()
                .then(categories => {
                    setUserSubCategories(categories.categories.sub_categories)
                })
        }
    }, [])




    const handleSend = async () => {
        const res = await getFilteredCourses(searchFilterObj);

        if (res.statusCode != 200) {
            return
        }
        result(res.courses)
    }


    let { price, overall_rating, duration } = courseSearch;

    return (
        <>
            <div className="allCoursesSearch">

                <div className="search">


                    <div className="price margin-right">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-r">
                                ფასი:  <span className="c-primary-green">   {price}₾</span>
                            </h1>
                        </div>
                        <RangeSlider
                            id={1}
                            steps={5}
                            min={0}
                            max={60}
                            back="var(--primary-green)"
                            front="var(--primary-grey)"
                            width="11vw"
                            value={price}
                            onChange={(value) => handleSearchInputs(value, "price")}
                        />
                    </div>




                    <div className="rating margin-right">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-r">შეფასება:
                                <span className="c-primary-yellow">   {overall_rating}</span>
                                <Star
                                    size={16}
                                    fill="var(--primary-yellow)"
                                    stroke="var(--primary-yellow)"
                                />
                            </h1>
                        </div>
                        <RangeSlider
                            id={2}
                            steps={.5}
                            min={0}
                            max={5}
                            back="var(--primary-yellow)"
                            front="var(--primary-grey)"
                            width="11vw"
                            value={overall_rating}
                            onChange={(value) => handleSearchInputs(value, "overall_rating")}
                        />
                    </div>



                    <div className="duration margin-right">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-r">
                                ხანგძლივობა:
                                <span className="c-primary-blue">   {duration}სთ</span>
                            </h1>
                        </div>
                        <RangeSlider
                            id={3}
                            steps={.1}
                            min={0}
                            max={20}
                            back="var(--primary-blue)"
                            front="var(--primary-grey)"
                            width="11vw"
                            value={courseSearch.duration}
                            onChange={(value) => handleSearchInputs(value, "duration")}
                        />
                    </div>


                    <div className="sub_category margin-right">
                        <Select
                            className="f-size-p5 f-weight-r"
                            size="small"
                            // minHeight="28rem"
                            placeHolder="ქვე კატოგირიები"
                            id={1}
                            options={userSubCategories}
                            icon={<Calendar size={25} />}
                            color="red"
                            loading={false}
                            disabled={false}
                            width="28rem"
                            onChange={(value) => handleSearchInputs(
                                {
                                    value: value,
                                    mainCategoryId: userSubCategories.find(ca => ca.id == value).main_category_id
                                },
                                "sub_category_id")}
                        />
                    </div>



                    <div className="difficulty margin-right">
                        <Select
                            size="small"
                            className="f-size-p5 f-weight-r"
                            placeHolder="სირთულე"
                            id={2}
                            options={SelectJson.difficulty}
                            icon={<Zap size={25} />}
                            color="green"
                            loading={false}
                            disabled={false}
                            width="22rem"
                            onChange={(value) => handleSearchInputs(value, "difficulty")}
                        />
                    </div>


                    <button onClick={() => handleSend()} className="course-search-btn">
                        <Search
                            size={35}
                            color="var(--secondary-darkest-gray)"
                        />
                    </button>

                </div>
            </div>
        </>
    )
}

export default CoursesSearch
