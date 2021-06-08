
import { Calendar, Zap, Search, Star } from "react-feather";
import { useState } from "react";


import RangeSlider from 'components/lib/RangeSlider/RangeSlider';
import Select from 'components/lib/select/select';



import SelectJson from "../../../public/json/Select.json";


type CourseSearchType = {
    price?: number;
    rating?: number;
    duration?:number
    sub_category?:any
    difficulty?:any
  };

  


const CoursesSearch = () => {


    const [courseSearch, setCourseSearch] = useState<CourseSearchType>({price:0,rating:0,duration:0})
    
    const handleSearchInputs = (value, field?:keyof(CourseSearchType)) => {
        courseSearch[field] = value;
        setCourseSearch({...courseSearch,[field]:value})
    }
        


    const handleSend =  () => {
        console.log(courseSearch)
    }


    let { price, rating, duration } = courseSearch;

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
                            steps={.5}
                            min={0}
                            max={100}
                            back="var(--primary-green)"
                            front="var(--primary-grey)"
                            width="11vw"
                            value={price}
                            onChange={(value) => handleSearchInputs(value,"price")}
                        />
                    </div>




                    <div className="rating margin-right">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-r">შეფასება:
                                <span className="c-primary-yellow">   {rating}</span>
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
                            max={100}
                            back="var(--primary-yellow)"
                            front="var(--primary-grey)"
                            width="11vw"
                            value={courseSearch.rating}
                            onChange={(value) => handleSearchInputs(value,"rating")}
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
                            steps={.5}
                            min={0}
                            max={100}
                            back="var(--primary-blue)"
                            front="var(--primary-grey)"
                            width="11vw"
                            value={courseSearch.duration}
                            onChange={(value) => handleSearchInputs(value,"duration")}
                        />
                    </div>


                    <div className="sub_category margin-right">
                        <Select
                            className="f-size-p5 f-weight-r"
                            size="small"
                            placeHolder="ქვე კატოგირიები"
                            id={1}
                            options={SelectJson.SelectRatingsOptions}
                            // onChange={handleSelectChange}
                            icon={<Calendar size={25} />}
                            color="red"
                            loading={false}
                            disabled={false}
                            width="28rem"
                            onChange={(value) => handleSearchInputs(value,"sub_category")}
                        />
                    </div>



                    <div className="difficulty margin-right">
                        <Select
                            size="small"
                            className="f-size-p5 f-weight-r"
                            placeHolder="სირთულე"
                            id={2}
                            options={SelectJson.SelectTimeOptions}
                            // onChange={handleSelectChange}
                            icon={<Zap size={25} />}
                            color="green"
                            loading={false}
                            disabled={false}
                            width="22rem"
                            onChange={(value) => handleSearchInputs(value,"difficulty")}
                        />
                    </div>


                    <button  onClick={() => handleSend()} className="course-search-btn">
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
