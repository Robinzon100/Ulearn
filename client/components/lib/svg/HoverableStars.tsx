import { useState } from "react";
import { Star } from "react-feather";

interface StarsWidth {
  starWidth: number;
  numberOfStars: any;
  getCurrentRating?: any;
}

const Stars: React.FC<StarsWidth> = ({ starWidth, numberOfStars, getCurrentRating }) => {

  const [rating, setRating] = useState<number | string | null>(numberOfStars);
  const [hover, setHover] = useState<number | string | null>(null);



  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;



        return (
          <label className="star_component" key={i}>
            <input
              type="radio"
              name="rating"
              value={i + 1}
              onClick={(e) => { getCurrentRating(e.currentTarget.value); setRating(e.currentTarget.value) }}
            />

            <Star
              key={i}
              className="star"
              size={starWidth}
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
          }
          .star_component input[type="radio"] {
            display: none !important;
          }

          .star_component:not(:first-child) {
            margin-left: 0.2rem;
          }
          .star_component .star {
            cursor: "pointer";
            transition: color 200ms;
          }
        `}
      </style>
    </div>
  );
};

export default Stars;
