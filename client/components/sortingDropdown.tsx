import React, { useState, useEffect } from 'react'
import { Star, Clock, Calendar } from "react-feather";
import SelectInput from "components/global_components/inputs/selectInput";
interface SortingDropdown {
    type: string;
}


const SortingDropdown: React.FC<SortingDropdown> = ({type }) => {
    return (
        <>

            { type === 'date' &&
                <div className="sorting__video-date colorChange" >
                    
                    <SelectInput  id={1} /> 
                    <div className="calendar sorting_styles">
                        <Calendar color="blue" size={17} />
                    </div>
                   
                </div>
            }


            {type === 'rating' &&
                <div className="sorting__video-raiting colorChange" >
                    <SelectInput  id={2} /> 
                    <div className="star sorting_styles">
                        <Star color="yellow" size={17} />
                    </div>
                    
                </div>
            }


            {type === 'time' &&
                <div className="sorting__video-length colorChange" >
                    <SelectInput id={3} /> 
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