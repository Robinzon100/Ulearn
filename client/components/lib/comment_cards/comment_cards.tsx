import  { useState } from "react";

import { ThumbsUp, ThumbsDown, Heart } from "react-feather";

// import Stars from "components/lib/svg/Stars";

interface CommentCards {
   id:number
    name: string;
    registrationDay: string;
    addedComment: string;
    imageUrl: string,
    rating: number,
    like: number,
    dislike: number,
    isLikedByInstructor: boolean
}

const comment_cards: React.FC<CommentCards> = ({
    // id,
    name,
    registrationDay,
    addedComment,
    imageUrl,
    // rating,
    like,
    dislike,
    isLikedByInstructor
},props) => {
    const [thumbsUp, setThumbsUp] = useState<number>(like)

    const [thumbsDown, setThumbsDown] = useState<number>(dislike)

    const [onClickLike, setOnClickLike] = useState<boolean>(false);

    const [onClickDislike, setOnClickDislike] = useState<boolean>(false);


    const handleSetThumbsUp = () => {
        if (like > 0) {
            setThumbsUp(like + 1);
            setThumbsDown(dislike)
            setOnClickLike(true);
            setOnClickDislike(false)
        } else {
            setThumbsUp(0);
        }
    }


    const handleSetThumbsDown = () => {
        if (dislike > 0) {
            setThumbsDown(dislike - 1)
            setThumbsUp(like);
            setOnClickLike(false)
            setOnClickDislike(true)
        } else {
            setThumbsDown(0);
        }
    }



    return (
        
            <div className="comment" key={props.key}>
                <div className="comment__pic" style={{ backgroundImage: `url(${imageUrl})` }}></div>

                <div className="comment__text">
                    <div className="about-user">
                        <div className="about-user__name">
                            <p><strong>{name}</strong></p>
                        </div>

                        <div className="about-user__time">
                            <p>({registrationDay})</p>
                        </div>
                    </div>

                    <div className="about-user__raiting">
                        {/* <Stars key={id} StarWidth={20} numberOfStars={rating} /> */}
                    </div>
                    <div className="added-comment">
                        <p>{addedComment}</p>
                    </div>

                    <div className="like-dislike">
                        <div className="like-dislike__thumbs-up"
                            onClick={handleSetThumbsUp}>
                            <ThumbsUp
                                fill={onClickLike ? "#338EFF" : "#ffffff"}
                                color={onClickLike ? "#ffffff" : "#191B1F"}
                                size={22} />
                            <div className="like_counter">
                                <p>
                                    <strong>{thumbsUp}</strong>
                                </p>
                            </div>
                        </div>
                        <div className="like-dislike__thumbs-down" onClick={handleSetThumbsDown}>
                            <ThumbsDown
                                fill={onClickDislike ? "#338EFF" : "#ffffff"}
                                color={onClickDislike ? "#ffffff" : "#191B1F"}
                                size={22} />
                            <div className="unlike_counter">
                                <p><strong>{thumbsDown}</strong></p>
                            </div>

                        </div>


                        {isLikedByInstructor ?

                            <div className="instructor_like">
                                <div style={{ backgroundImage: `url(${imageUrl})` }} className="instructor__photo"></div>
                                <div className="heart">
                                    <Heart fill="#FF5C4D" color="#FF5C4D" size={23} />
                                </div>
                            </div>

                            : null}

                    </div>
                </div>
            </div>
       
    );
};
export default comment_cards;