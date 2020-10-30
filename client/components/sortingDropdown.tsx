import React, { useState, useEffect } from 'react'
import { Star, Clock, Calendar } from "react-feather";
import SelectInput from "components/global_components/inputs/selectInput";
interface SortingDropdown {
    type: string;
}


const SortingDropdown: React.FC<SortingDropdown> = ({ type }) => {
    const [inputId, setInputId] = useState(1)

    return (
        <>

            { type === 'date' &&
                <div className="sorting__video-date colorChange">
                    {/* //! TODO  აქ გაარკვიე რამენაირად */}
                    
                    {/* //! აქ ვერაფრით ვერ გადავეცი უნიკალური გასაღები 
                        //! არ ვიცი ვერ ვხედავ რაღაცას ალბათ და იმ 
                        //! გასარების შეცდომაც იმიტომ აგდებს
                    */}
                    <SelectInput id={1} /> 
                    <div className="calendar sorting_styles">
                        <Calendar color="blue" size={17} />
                    </div>
                   
                </div>
            }


            {type === 'rating' &&
                <div className="sorting__video-raiting colorChange">
                    <select className="search_dropdown paragraph-smallest paragraph-regular-Noto" name="sort" >
                        <option 
                        value="დახარისხება" 
                        disabled className="paragraph-smallest paragraph-regular-Noto">
                           რეიტინგი
                        </option>
                        <option 
                        value="უახლესი" 
                        className="paragraph-smallest paragraph-regular-Noto ">
                        რეიტინგი
                        </option>
                        <option 
                        value="ყველაზე აქტუალური" 
                        className="paragraph-smallest paragraph-regular-Noto ">
                            ყველაზე აქტუალური
                        </option>
                        <option 
                        value="ყველაზე რეიტიგული" 
                        className="paragraph-smallest paragraph-regular-Noto ">
                            ყველაზე რეიტინგული
                        </option>
                    </select>
                    <div className="star sorting_styles">
                        <Star color="yellow" size={17} />
                    </div>
                    
                </div>
            }


            {type === 'time' &&
                <div className="sorting__video-length colorChange">
                     <select className="search_dropdown paragraph-smallest paragraph-regular-Noto" name="sort" >
                        <option 
                        value="დახარისხება" 
                        disabled className="paragraph-smallest paragraph-regular-Noto">
                           ხანგძლივობა
                        </option>
                        <option 
                        value="უახლესი" 
                        className="paragraph-smallest paragraph-regular-Noto ">
                        ხანგძლივობა
                        </option>
                        <option 
                        value="ყველაზე აქტუალური" 
                        className="paragraph-smallest paragraph-regular-Noto ">
                            ყველაზე აქტუალური
                        </option>
                        <option 
                        value="ყველაზე რეიტიგული" 
                        className="paragraph-smallest paragraph-regular-Noto ">
                            ყველაზე რეიტინგული
                        </option>
                    </select>
                    <div className="clock sorting_styles">
                        <Clock color="red" size={17} />
                    </div>
                   
                </div>
            }


            {/* <style jsx>{`
            
            
           
           `}

           </style> */}
        </>
    )
}


export default SortingDropdown;