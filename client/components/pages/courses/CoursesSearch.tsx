
import { Calendar, Zap, Search, Star } from "react-feather";
import { useForm, SubmitHandler } from "react-hook-form";


import RangeSlider from 'components/lib/RangeSlider/RangeSlider';
import Select from 'components/lib/select/select';



import SelectJson from "../../../public/json/Select.json";
import { useState } from "react";


type CourseSearchType = {
    price: number;
    rating: number;
    duration:number
    sub_category:any
    difficulty:any
  };

  


const CoursesSearch = () => {

  const {register,handleSubmit} = useForm<CourseSearchType>();

    const handleSelectChange = (value) => {
        console.log(value);
    };


    const onSubmit: SubmitHandler<CourseSearchType> = (data: CourseSearchType) => {
        console.log(data);
    }

    return (
        <>
            <div className="allCoursesSearch">
            <form onSubmit={handleSubmit(onSubmit)} >

                <div className="search">


                    <div className="price margin-right">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-r">
                                ფასი:  <span className="c-primary-green">   15₾</span>
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
                            // value={0}
                            {...register("price")}
                        />
                    </div>




                    <div className="rating margin-right">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-r">შეფასება:
                                <span className="c-primary-yellow">   4.5</span>
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
                            {...register("rating")}
                        />
                    </div>



                    <div className="duration margin-right">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-r">
                                ხანგძლივობა:
                                <span className="c-primary-blue">   4სთ</span>
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
                            {...register("duration")}
                        />
                    </div>


                    <div className="sub_category margin-right">
                        <Select
                            className="f-size-p5 f-weight-r"
                            size="small"
                            placeHolder="ქვე კატოგირიები"
                            id={1}
                            options={SelectJson.SelectRatingsOptions}
                            onChange={handleSelectChange}
                            icon={<Calendar size={25} />}
                            color="red"
                            loading={false}
                            disabled={false}
                            width="28rem"
                            // {...register("sub_category")}
                        />
                    </div>



                    <div className="difficulty margin-right">
                        <Select
                            size="small"
                            className="f-size-p5 f-weight-r"
                            placeHolder="სირთულე"
                            id={2}
                            options={SelectJson.SelectTimeOptions}
                            onChange={handleSelectChange}
                            icon={<Zap size={25} />}
                            color="green"
                            loading={false}
                            disabled={false}
                            width="22rem"
                            // {...register("difficulty")}
                        />
                    </div>


                    <button type="submit" className="course-search-btn">
                        <Search
                            size={35}
                            color="var(--secondary-darkest-gray)"
                        />
                    </button>

                </div>
                </form>
            </div>
        </>
    )
}

export default CoursesSearch
