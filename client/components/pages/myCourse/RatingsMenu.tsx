import { ArrowUp } from "react-feather";

import Stars from "components/lib/svg/Stars";
import Lines from "components/lib/svg/Lines";
import { useEffect } from "react";

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

 let rating = Object.values(detailed_rating)

    
  return (
    <>
      <div className="ratings ">
        <div className="ratings__with-number">
          <div className="ratings__with-number--heading">
            <p className="f-size-h1">{overall_rating}</p>
          </div>
          <div className="ratings__with-number--stars">
            <Stars StarWidth={20} numberOfStars={4} />
          </div>
          <div className="ratings__with-number--voice">
            <ArrowUp size={15} />
            <p className="f-size-p6">ხმა</p>
          </div>
        </div>

        <div className="ratings__with-percentage">
          {/* //! ხაზები და პროცენტები */}

          <div className="percentage_container">

             {rating.map((data, i) => (
              <div className="rating" key={i}>
                <div className="lines_stars" >
                  <Stars StarWidth={16} numberOfStars={data} />
                  <Lines LineWidth={data} />
                </div>

                <div className="percentage_number">
                  <p className="f-size-p5">{data}%</p>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
      <div className="ratings-about">
        <div className="ratings-about__container">
          <div className="difficulty">
            <div className="graph">{difficulty}</div>
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
