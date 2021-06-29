import { useState, useEffect } from 'react';

import { ThumbsUp, ThumbsDown, Heart } from "react-feather";
import HoverableStars from "components/lib/svg/HoverableStars";
import Stars from 'components/lib/svg/Stars';

interface CommentCards {
    id?: number;
    full_name?: string;
    registrationDay?: string;
    comment?: string;
    image_url?: string;
    rating?: number;
    like?: number;
    dislike?: number;
    isLikedByInstructor?: boolean;
    getCurrentRating?: any
}





const CommentCards: React.FC<CommentCards> = (
    {
        id,
        full_name,
        comment,
        image_url,
        rating,
        like,
        dislike,
        isLikedByInstructor,
    }
) => {
    const [thumbsUp, setThumbsUp] = useState<number>(like);

    const [thumbsDown, setThumbsDown] = useState<number>(dislike);

    const [onClickLike, setOnClickLike] = useState<boolean>(false);

    const [onClickDislike, setOnClickDislike] = useState<boolean>(false);



    const handleSetThumbsUp = (id) => {
        if (like > 0) {
            setThumbsUp(like + 1);
            setThumbsDown(dislike);
            setOnClickLike(true);
            setOnClickDislike(false);
        } else {
            setThumbsUp(0);
        }
    };



    const handleSetThumbsDown = (id) => {
        if (dislike > 0) {
            setThumbsDown(dislike - 1);
            setThumbsUp(like);
            setOnClickLike(false);
            setOnClickDislike(true);
        } else {
            setThumbsDown(0);
        }
    };


    return (
        <div className="comment" key={id}>
            <div
                className="comment__pic"
                style={{
                    backgroundImage: `url(${image_url ?
                        process.env.BACK_END_URL + 'image_url' + image_url :
                        '/pictures/unregistered_user.svg'})`
                }}
            />



            <div className="comment__text">
                <div className="about-user">
                    <div className="about-user__name">
                        <p className="f-size-p3 f-weight-b">
                            {full_name}
                        </p>
                    </div>

                </div>




                <div className="about-user__raiting">
                    <Stars
                        starWidth={20}
                        numberOfStars={rating}
                    />
                </div>
                <div className="added-comment">
                    <p className="f-size-p5 f-weight-m">{comment}</p>
                </div>




                <div className="like-dislike">
                    <div className="like-dislike__thumbs-up" onClick={() => handleSetThumbsUp(id)}>
                        <ThumbsUp
                            fill={onClickLike ? "#338EFF" : "#ffffff"}
                            color={onClickLike ? "#ffffff" : "#191B1F"}
                            size={30}
                        />
                        <div className="like_counter">
                            <p className=" f-weight-m">
                                {thumbsUp}
                            </p>
                        </div>
                    </div>
                    <div
                        className="like-dislike__thumbs-down"
                        onClick={() => handleSetThumbsDown(id)}>
                        <ThumbsDown
                            fill={onClickDislike ? "#338EFF" : "#ffffff"}
                            color={onClickDislike ? "#ffffff" : "#191B1F"}
                            size={30}
                        />
                        <div className="unlike_counter">
                            <p className="f-weight-m">
                                {thumbsDown}
                            </p>
                        </div>
                    </div>



                    {isLikedByInstructor ? (
                        <div className="instructor_like">
                            <div
                                style={{ backgroundImage: `url(${process.env.BACK_END_URL}/api/images/${image_url})` }}
                                className="instructor__photo"
                            ></div>
                            <div className="heart">
                                <Heart fill="#FF5C4D" color="#FF5C4D" size={20} />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
export default CommentCards;
