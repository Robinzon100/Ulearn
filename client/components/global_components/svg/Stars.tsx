import React, { useState } from "react";
import { Star } from "react-feather";

interface StarsWidth {
    StarWidth: number;
    numberOfStars: number | 0 | 1 | 2 | 3 | 4 | 5
}

const stars: React.FC<StarsWidth> = ({ StarWidth, numberOfStars }) => {
    const [rating, setRating] = useState<number | null>(numberOfStars)
    const [hover, setHover] = useState<number | null>(null)
    return (
        <>
            <div className="stars">
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <>

                            <label className="star_component">

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
                        </>
                    )
                })}
            </div>
        </>
    );
}


export default stars;