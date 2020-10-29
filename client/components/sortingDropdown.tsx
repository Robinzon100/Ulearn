import React,{useState} from 'react'
import { Star,Clock,Calendar } from "react-feather";

interface SortingDropdown{
    type: string;
} 


const SortingDropdown:React.FC<SortingDropdown> = ({type})  => {

    return (
        <>

            { type == 'date' &&
                <div className="sorting__video-date colorChange">
                    <div className="calendar sorting_styles" id="calendar">
                        <Calendar color="blue" size={17}/>
                    </div>
                    <div className="heading">
                        <p className="paragraph-regular-Noto paragraph-medium-small">თარიღი</p>
                    </div>
                </div>
            }


            {type === 'rating' &&
                <div className="sorting__video-raiting colorChange">
                    <div className="star sorting_styles">
                        <Star color="yellow" size={17}/>
                    </div>
                    <div className="heading">
                    <p className="paragraph-regular-Noto paragraph-medium-small">რეიტინგი</p>
                    </div>
                </div>
            }


            {type === 'time' &&
                <div className="sorting__video-length colorChange">
                    <div className="clock sorting_styles">
                        <Clock color="red" size={17}/>
                    </div>
                    <div className="heading">
                    <p className="paragraph-regular-Noto paragraph-medium-small">ხანგძლივობა</p>
                    </div>
                </div>
            }

            
           <style jsx>{`
            
            .sorting__video-date,
            .sorting__video-raiting,
            .sorting__video-length {
                background-color: var(--secondary-light-grey);
                border-radius: 8px;
                padding: 0.5vw 2vw;
                position: relative;
            }
            .heading {
                margin-left: 1.5vw;
            }

            .sorting_styles {
                border-radius: 8px 0px 0px 8px;
                position: absolute;
                left: 0;
                // padding: 10px 0px;
                width: 5rem;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .sorting__video-date {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .calendar {
                background-color: var(--primary-blue);
                opacity: 60%;
            }

            .sorting__video-raiting {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .star {
                background-color: var(--primary-yellow);
                opacity: 60%;

            }

            .sorting__video-length {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .clock {
                background-color: var(--secondary-dark-red);
                opacity: 60%;
            }
           
           `}

           </style>
        </>
    )
}


export default SortingDropdown;