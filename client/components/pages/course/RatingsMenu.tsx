import {  useState } from 'react';


//* ============= OUR IMPORTS
import Stars from "components/lib/svg/Stars";
import Lines from "components/lib/svg/Lines";
import DifficultySvg from "components/pages/course/difficultySvg/DifficultySvg"



import { geteveryRattingValuePercentages,objectValueSum } from './RattingMenus.utils';





interface RatingMenu {
  difficulty: number;
  student_amount: number;
  overall_rating: number;
  detailed_rating: any;
  duration: number;
}





const RatingMenu = ({
  difficulty,
  student_amount,
  overall_rating,
  detailed_rating,
  duration,
}: RatingMenu) => {
  const [rattingPercentage,] = useState(geteveryRattingValuePercentages(detailed_rating))
  const [displaySum,] = useState(objectValueSum(detailed_rating))


  return (
    <>
      <div className="ratings ">
        <div className="ratings__with-number">
          <div className="ratings__with-number--heading">
            <p className="f-size-h1">{overall_rating ? overall_rating : 0}</p>
          </div>
          <div className="ratings__with-number--stars">
            <Stars starWidth={20} numberOfStars={4} />
          </div>
          <div className="ratings__with-number--voice">
            <p className="f-size-p6">{displaySum}</p>
            <p style={{marginLeft:"1rem"}} className="f-size-p6">ხმა</p>
          </div>
        </div>

        <div className="ratings__with-percentage">
          {/* //! ხაზები და პროცენტები */}

          <div className="percentage_container">
            {rattingPercentage.map((percent, i) => (
              <div className="rating" key={i}>
                <div className="lines_stars" >
                  <Stars starWidth={16} numberOfStars={i + 1} />
                  <Lines percent={percent} />
                </div>

                <div className="percentage_number">
                  <p className="f-size-p5">{percent}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="ratings-about">
        <div className="ratings-about__container">

          <div className="difficulty">
            <div className="graph">
                <DifficultySvg difficulty={difficulty}/>
            </div>
            <p className="f-size-p6">სირთულე</p>
          </div>

          <div className="learning">
            <h1 className="f-size-h7">{student_amount}</h1>
            <p className="f-size-p6">სწავლობს</p>
          </div>

          <div className="time-length">
            <h1 className="f-size-h7">
              {duration}
              <span className="f-size-h7">სთ</span>
            </h1>
            <p className="f-size-p6">ხანგძლივობა</p>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default RatingMenu;
