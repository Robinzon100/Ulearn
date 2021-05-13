import { useState} from "react";
import { Star } from "react-feather";

interface StarsWidth {
  StarWidth: number;
  numberOfStars:any;
}

const stars: React.FC<StarsWidth> = ({ StarWidth, numberOfStars }) => {

  const [rating, setRating] = useState<number | string | null>(numberOfStars);
  const [hover, setHover] = useState<number | string | null>(null);


  return (
    <div className="stars">
      {[...Array(5)].map((_,i) => {
        // const starPercentage = (numberOfStars / starsTotal) * 100;
        const ratingValue = i + 1;
    
        /// TODO fix star logic
        return (
          <label className="star_component" key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />

            <Star
              key={i}
              className="star"
              size={StarWidth}
              color={ratingValue <= (hover || rating) ? "#FFD703" : "#EBEBEB"}
              fill={ratingValue <= (hover || rating) ? "#FFD703" : "#EBEBEB"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}

      <style jsx>
        {`
          .stars {
            display: flex;
            // margin-left: .3rem;
          }
          .star_component input[type="radio"] {
            display: none !important;
          }

          .star_component:not(:first-child) {
            margin-left: 0.2rem;
          }

          .star_component .star {
            cursor: pointer;
            transition: color 200ms;
          }
        `}
      </style>
    </div>
  );
};

export default stars;
