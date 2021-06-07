
import { Calendar, Zap, Search,Star } from "react-feather";


import RangeSlider from 'components/lib/RangeSlider/RangeSlider';
import Select from 'components/lib/select/select';



import SelectJson from "../../../public/json/Select.json";


const handleSelectChange = (value) => {
    console.log(value);
};



const AllCoursesSearch = () => {
    return (
        <>
            <div className="allCoursesSearch">

                <div className="search">



                    <div className="price margin-right">
                        <div className="heading">
                            <h1 className="f-size-p5 f-weight-r">
                                ფასი:  <span className="c-primary-green">   15₾</span>
                            </h1>
                        </div>
                        <RangeSlider
                            steps={.5}
                            min={0}
                            max={100}
                            back="var(--primary-green)"
                            front="var(--primary-grey)"
                            width="22rem"
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
                            steps={.5}
                            min={0}
                            max={100}
                            back="var(--primary-yellow)"
                            front="var(--primary-grey)"
                            width="22rem"
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
                            steps={.5}
                            min={0}
                            max={100}
                            back="var(--primary-blue)"
                            front="var(--primary-grey)"
                            width="22rem"
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
                        />
                    </div>



                    <div className="difficulty margin-right">
                        <Select
                            size="small"
                            className="f-size-p5 f-weight-r"
                            placeHolder="სირთულე"
                            id={1}
                            options={SelectJson.SelectTimeOptions}
                            onChange={handleSelectChange}
                            icon={<Zap size={25} />}
                            color="green"
                            loading={false}
                            disabled={false}
                            width="22rem"
                        />
                    </div>


                    <button type="submit" className="course-search-btn">
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

export default AllCoursesSearch
