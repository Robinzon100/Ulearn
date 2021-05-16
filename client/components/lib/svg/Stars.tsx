import { useState} from "react";
import { Star } from "react-feather";

interface StarsWidth {
  starWidth: number;
  numberOfStars:any;
}

const stars: React.FC<StarsWidth> = ({ starWidth, numberOfStars }) => {

  const [rating,] = useState<number | string | null>(numberOfStars);
  const [hover,] = useState<number | string | null>(null);


    
  return (
    <div className="stars">
      {[...Array(5)].map((_,i) => {
        const ratingValue = i + 1;
    
        /// TODO fix star logic
        return (
          <label className="star_component" key={i}>
            <input
              type="radio"
              name="rating"
              value={numberOfStars}
            />

            <Star
              key={i}
              className="star"
              size={starWidth}
              color={ratingValue <= (hover || rating) ? "#FFD703" : "#EBEBEB"}
              fill={ratingValue <= (hover || rating) ? "#FFD703" : "#EBEBEB"}
            />
          </label>
        );
      })}






      <style jsx>
        {`
          .stars {
            display: flex;
          }
          .star_component input[type="radio"] {
            display: none !important;
          }

          .star_component:not(:first-child) {
            margin-left: 0.2rem;
          }
        `}
      </style>
    </div>
  );
};

export default stars;
