import { ArrowUp } from "react-feather";

import Stars from "components/lib/svg/Stars";
import Lines from "components/lib/svg/Lines";



interface RatingMenu {
  difficulty: number;
  student_amount: number;
  overall_rating: number;
  detailed_rating: any;
  duration: number;
}

const RatingMenu = ({difficulty,student_amount,overall_rating,detailed_rating,duration,
}: RatingMenu) => {


    
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

             {Object.entries(detailed_rating).map((value, key) => (
                 
              <div className="rating" key={key}>
                <div className="lines_stars" >
                  <Stars StarWidth={16} numberOfStars={key + 1} />
                  <Lines LineWidth={value[1]} />
                </div>

                <div className="percentage_number">
                  <p className="f-size-p5">{value[1]}%</p>
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
