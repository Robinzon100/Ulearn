
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
    }
) => {


    return (
        <div className="comment" key={id}>
            <div
                className="comment__pic"
                style={{
                    backgroundImage: `url(${image_url ?
                        process.env.BACK_END_URL + '/api/images/' + image_url :
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

            </div>
        </div>
    );
};
export default CommentCards;
